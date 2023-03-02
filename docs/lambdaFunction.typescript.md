# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktf/provider-aws.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function aws_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunction(scope: Construct, id: string, config: LambdaFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage">putEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig">putImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart">putSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig">putTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">resetCodeSigningConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig">resetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers">resetLayers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize">resetMemorySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType">resetPackageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish">resetPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds">resetReplacementSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy">resetReplaceSecurityGroupsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">resetReservedConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart">resetSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash">resetSourceCodeHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```typescript
public putDeadLetterConfig(value: LambdaFunctionDeadLetterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment"></a>

```typescript
public putEnvironment(value: LambdaFunctionEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `putEphemeralStorage` <a name="putEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```typescript
public putEphemeralStorage(value: LambdaFunctionEphemeralStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig"></a>

```typescript
public putFileSystemConfig(value: LambdaFunctionFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `putImageConfig` <a name="putImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig"></a>

```typescript
public putImageConfig(value: LambdaFunctionImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `putSnapStart` <a name="putSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart"></a>

```typescript
public putSnapStart(value: LambdaFunctionSnapStart): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdaFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

---

##### `putTracingConfig` <a name="putTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```typescript
public putTracingConfig(value: LambdaFunctionTracingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```typescript
public putVpcConfig(value: LambdaFunctionVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetCodeSigningConfigArn` <a name="resetCodeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```typescript
public resetCodeSigningConfigArn(): void
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```typescript
public resetDeadLetterConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig"></a>

```typescript
public resetFileSystemConfig(): void
```

##### `resetHandler` <a name="resetHandler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageConfig` <a name="resetImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```typescript
public resetImageConfig(): void
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLayers` <a name="resetLayers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers"></a>

```typescript
public resetLayers(): void
```

##### `resetMemorySize` <a name="resetMemorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```typescript
public resetMemorySize(): void
```

##### `resetPackageType` <a name="resetPackageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType"></a>

```typescript
public resetPackageType(): void
```

##### `resetPublish` <a name="resetPublish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish"></a>

```typescript
public resetPublish(): void
```

##### `resetReplacementSecurityGroupIds` <a name="resetReplacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds"></a>

```typescript
public resetReplacementSecurityGroupIds(): void
```

##### `resetReplaceSecurityGroupsOnDestroy` <a name="resetReplaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy"></a>

```typescript
public resetReplaceSecurityGroupsOnDestroy(): void
```

##### `resetReservedConcurrentExecutions` <a name="resetReservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```typescript
public resetReservedConcurrentExecutions(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key"></a>

```typescript
public resetS3Key(): void
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```

##### `resetSnapStart` <a name="resetSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```typescript
public resetSnapStart(): void
```

##### `resetSourceCodeHash` <a name="resetSourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash"></a>

```typescript
public resetSourceCodeHash(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```typescript
public resetTracingConfig(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

lambdaFunction.LambdaFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

lambdaFunction.LambdaFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

lambdaFunction.LambdaFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn">invokeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn">qualifiedArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn">qualifiedInvokeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn">signingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart">snapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize">sourceCodeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">codeSigningConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput">imageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput">layersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput">memorySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput">packageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput">publishInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput">replacementSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput">replaceSecurityGroupsOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">reservedConcurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput">snapStartInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput">sourceCodeHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput">tracingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers">layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds">replacementSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy">replaceSecurityGroupsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash">sourceCodeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: LambdaFunctionDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment"></a>

```typescript
public readonly environment: LambdaFunctionEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: LambdaFunctionEphemeralStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: LambdaFunctionFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a>

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```typescript
public readonly imageConfig: LambdaFunctionImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `invokeArn`<sup>Required</sup> <a name="invokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn"></a>

```typescript
public readonly invokeArn: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `qualifiedArn`<sup>Required</sup> <a name="qualifiedArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn"></a>

```typescript
public readonly qualifiedArn: string;
```

- *Type:* string

---

##### `qualifiedInvokeArn`<sup>Required</sup> <a name="qualifiedInvokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn"></a>

```typescript
public readonly qualifiedInvokeArn: string;
```

- *Type:* string

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn"></a>

```typescript
public readonly signingJobArn: string;
```

- *Type:* string

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn"></a>

```typescript
public readonly signingProfileVersionArn: string;
```

- *Type:* string

---

##### `snapStart`<sup>Required</sup> <a name="snapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart"></a>

```typescript
public readonly snapStart: LambdaFunctionSnapStartOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize"></a>

```typescript
public readonly sourceCodeSize: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a>

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: LambdaFunctionTracingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: LambdaFunctionVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `codeSigningConfigArnInput`<sup>Optional</sup> <a name="codeSigningConfigArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```typescript
public readonly codeSigningConfigArnInput: string;
```

- *Type:* string

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```typescript
public readonly deadLetterConfigInput: LambdaFunctionDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```typescript
public readonly environmentInput: LambdaFunctionEnvironment;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: LambdaFunctionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput"></a>

```typescript
public readonly fileSystemConfigInput: LambdaFunctionFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageConfigInput`<sup>Optional</sup> <a name="imageConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```typescript
public readonly imageConfigInput: LambdaFunctionImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `layersInput`<sup>Optional</sup> <a name="layersInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput"></a>

```typescript
public readonly layersInput: string[];
```

- *Type:* string[]

---

##### `memorySizeInput`<sup>Optional</sup> <a name="memorySizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```typescript
public readonly memorySizeInput: number;
```

- *Type:* number

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```typescript
public readonly packageTypeInput: string;
```

- *Type:* string

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput"></a>

```typescript
public readonly publishInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replacementSecurityGroupIdsInput`<sup>Optional</sup> <a name="replacementSecurityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput"></a>

```typescript
public readonly replacementSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `replaceSecurityGroupsOnDestroyInput`<sup>Optional</sup> <a name="replaceSecurityGroupsOnDestroyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput"></a>

```typescript
public readonly replaceSecurityGroupsOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reservedConcurrentExecutionsInput`<sup>Optional</sup> <a name="reservedConcurrentExecutionsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```typescript
public readonly reservedConcurrentExecutionsInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `snapStartInput`<sup>Optional</sup> <a name="snapStartInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```typescript
public readonly snapStartInput: LambdaFunctionSnapStart;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `sourceCodeHashInput`<sup>Optional</sup> <a name="sourceCodeHashInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput"></a>

```typescript
public readonly sourceCodeHashInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LambdaFunctionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> | cdktf.IResolvable

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```typescript
public readonly tracingConfigInput: LambdaFunctionTracingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: LambdaFunctionVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replacementSecurityGroupIds`<sup>Required</sup> <a name="replacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds"></a>

```typescript
public readonly replacementSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `replaceSecurityGroupsOnDestroy`<sup>Required</sup> <a name="replaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy"></a>

```typescript
public readonly replaceSecurityGroupsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="reservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash"></a>

```typescript
public readonly sourceCodeHash: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionConfig: lambdaFunction.LambdaFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures">architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler">handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri">imageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers">layers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize">memorySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType">packageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds">replacementSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy">replaceSecurityGroupsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart">snapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash">sourceCodeHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `codeSigningConfigArn`<sup>Optional</sup> <a name="codeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: LambdaFunctionDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```typescript
public readonly environment: LambdaFunctionEnvironment;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: LambdaFunctionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: LambdaFunctionFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```typescript
public readonly imageConfig: LambdaFunctionImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `packageType`<sup>Optional</sup> <a name="packageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `replacementSecurityGroupIds`<sup>Optional</sup> <a name="replacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds"></a>

```typescript
public readonly replacementSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `replaceSecurityGroupsOnDestroy`<sup>Optional</sup> <a name="replaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy"></a>

```typescript
public readonly replaceSecurityGroupsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```typescript
public readonly snapStart: LambdaFunctionSnapStart;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash"></a>

```typescript
public readonly sourceCodeHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaFunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: LambdaFunctionTracingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: LambdaFunctionVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionDeadLetterConfig: lambdaFunction.LambdaFunctionDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">targetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}. |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}.

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionEnvironment: lambdaFunction.LambdaFunctionEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}. |

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}.

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionEphemeralStorage: lambdaFunction.LambdaFunctionEphemeralStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}.

---

### LambdaFunctionFileSystemConfig <a name="LambdaFunctionFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionFileSystemConfig: lambdaFunction.LambdaFunctionFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath">localMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}.

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}.

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionImageConfig: lambdaFunction.LambdaFunctionImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}.

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}.

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionSnapStart: lambdaFunction.LambdaFunctionSnapStart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">applyOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}. |

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}.

---

### LambdaFunctionTimeouts <a name="LambdaFunctionTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionTimeouts: lambdaFunction.LambdaFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}.

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionTracingConfig: lambdaFunction.LambdaFunctionTracingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}.

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

const lambdaFunctionVpcConfig: lambdaFunction.LambdaFunctionVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionEnvironment;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigOutputReference <a name="LambdaFunctionFileSystemConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput">localMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath">localMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `localMountPathInput`<sup>Optional</sup> <a name="localMountPathInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput"></a>

```typescript
public readonly localMountPathInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionFileSystemConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string[];
```

- *Type:* string[]

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionImageConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionSnapStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus">optimizationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">applyOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">applyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optimizationStatus`<sup>Required</sup> <a name="optimizationStatus" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus"></a>

```typescript
public readonly optimizationStatus: string;
```

- *Type:* string

---

##### `applyOnInput`<sup>Optional</sup> <a name="applyOnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```typescript
public readonly applyOnInput: string;
```

- *Type:* string

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionSnapStart;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionTimeoutsOutputReference <a name="LambdaFunctionTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> | cdktf.IResolvable

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionTracingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionTracingConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktf/provider-aws'

new lambdaFunction.LambdaFunctionVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionVpcConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



