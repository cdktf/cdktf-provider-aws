# `sagemakerEndpointConfiguration` Submodule <a name="`sagemakerEndpointConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerEndpointConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpointConfiguration <a name="SagemakerEndpointConfiguration" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfiguration(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig">SagemakerEndpointConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig">SagemakerEndpointConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig">putAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig">putDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants">putProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants">putShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig">resetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig">resetDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants">resetShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAsyncInferenceConfig` <a name="putAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig"></a>

```typescript
public putAsyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `putDataCaptureConfig` <a name="putDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig"></a>

```typescript
public putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `putProductionVariants` <a name="putProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants"></a>

```typescript
public putProductionVariants(value: IResolvable | SagemakerEndpointConfigurationProductionVariants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]

---

##### `putShadowProductionVariants` <a name="putShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants"></a>

```typescript
public putShadowProductionVariants(value: IResolvable | SagemakerEndpointConfigurationShadowProductionVariants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]

---

##### `resetAsyncInferenceConfig` <a name="resetAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig"></a>

```typescript
public resetAsyncInferenceConfig(): void
```

##### `resetDataCaptureConfig` <a name="resetDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig"></a>

```typescript
public resetDataCaptureConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetShadowProductionVariants` <a name="resetShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants"></a>

```typescript
public resetShadowProductionVariants(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants">productionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants">shadowProductionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput">asyncInferenceConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput">dataCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput">productionVariantsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput">shadowProductionVariantsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `asyncInferenceConfig`<sup>Required</sup> <a name="asyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig"></a>

```typescript
public readonly asyncInferenceConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a>

---

##### `dataCaptureConfig`<sup>Required</sup> <a name="dataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig"></a>

```typescript
public readonly dataCaptureConfig: SagemakerEndpointConfigurationDataCaptureConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a>

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants"></a>

```typescript
public readonly productionVariants: SagemakerEndpointConfigurationProductionVariantsList;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a>

---

##### `shadowProductionVariants`<sup>Required</sup> <a name="shadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants"></a>

```typescript
public readonly shadowProductionVariants: SagemakerEndpointConfigurationShadowProductionVariantsList;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a>

---

##### `asyncInferenceConfigInput`<sup>Optional</sup> <a name="asyncInferenceConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput"></a>

```typescript
public readonly asyncInferenceConfigInput: SagemakerEndpointConfigurationAsyncInferenceConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `dataCaptureConfigInput`<sup>Optional</sup> <a name="dataCaptureConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput"></a>

```typescript
public readonly dataCaptureConfigInput: SagemakerEndpointConfigurationDataCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productionVariantsInput`<sup>Optional</sup> <a name="productionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput"></a>

```typescript
public readonly productionVariantsInput: IResolvable | SagemakerEndpointConfigurationProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]

---

##### `shadowProductionVariantsInput`<sup>Optional</sup> <a name="shadowProductionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput"></a>

```typescript
public readonly shadowProductionVariantsInput: IResolvable | SagemakerEndpointConfigurationShadowProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationAsyncInferenceConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | client_config block. |

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#output_config SagemakerEndpointConfiguration#output_config}

---

##### `clientConfig`<sup>Optional</sup> <a name="clientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig"></a>

```typescript
public readonly clientConfig: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#client_config SagemakerEndpointConfiguration#client_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationAsyncInferenceConfigClientConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance">maxConcurrentInvocationsPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}. |

---

##### `maxConcurrentInvocationsPerInstance`<sup>Optional</sup> <a name="maxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance"></a>

```typescript
public readonly maxConcurrentInvocationsPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}.

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | notification_config block. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#notification_config SagemakerEndpointConfiguration#notification_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">errorTopic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">successTopic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}. |

---

##### `errorTopic`<sup>Optional</sup> <a name="errorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```typescript
public readonly errorTopic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}.

---

##### `successTopic`<sup>Optional</sup> <a name="successTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```typescript
public readonly successTopic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}.

---

### SagemakerEndpointConfigurationConfig <a name="SagemakerEndpointConfigurationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants">productionVariants</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]</code> | production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | async_inference_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | data_capture_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants">shadowProductionVariants</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]</code> | shadow_production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants"></a>

```typescript
public readonly productionVariants: IResolvable | SagemakerEndpointConfigurationProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]

production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}

---

##### `asyncInferenceConfig`<sup>Optional</sup> <a name="asyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig"></a>

```typescript
public readonly asyncInferenceConfig: SagemakerEndpointConfigurationAsyncInferenceConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

async_inference_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}

---

##### `dataCaptureConfig`<sup>Optional</sup> <a name="dataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig"></a>

```typescript
public readonly dataCaptureConfig: SagemakerEndpointConfigurationDataCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

data_capture_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}.

---

##### `shadowProductionVariants`<sup>Optional</sup> <a name="shadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants"></a>

```typescript
public readonly shadowProductionVariants: IResolvable | SagemakerEndpointConfigurationShadowProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]

shadow_production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}.

---

### SagemakerEndpointConfigurationDataCaptureConfig <a name="SagemakerEndpointConfigurationDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationDataCaptureConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions">captureOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]</code> | capture_options block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage">initialSamplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader">captureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | capture_content_type_header block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture">enableCapture</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `captureOptions`<sup>Required</sup> <a name="captureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions"></a>

```typescript
public readonly captureOptions: IResolvable | SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]

capture_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `initialSamplingPercentage`<sup>Required</sup> <a name="initialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage"></a>

```typescript
public readonly initialSamplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}.

---

##### `captureContentTypeHeader`<sup>Optional</sup> <a name="captureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader"></a>

```typescript
public readonly captureContentTypeHeader: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

capture_content_type_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}

---

##### `enableCapture`<sup>Optional</sup> <a name="enableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture"></a>

```typescript
public readonly enableCapture: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}. |

---

##### `csvContentTypes`<sup>Optional</sup> <a name="csvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}.

---

##### `jsonContentTypes`<sup>Optional</sup> <a name="jsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationDataCaptureConfigCaptureOptions: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode">captureMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}. |

---

##### `captureMode`<sup>Required</sup> <a name="captureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode"></a>

```typescript
public readonly captureMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}.

---

### SagemakerEndpointConfigurationProductionVariants <a name="SagemakerEndpointConfigurationProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationProductionVariants: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName">variantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `coreDumpConfig`<sup>Optional</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `initialVariantWeight`<sup>Optional</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `serverlessConfig`<sup>Optional</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: SagemakerEndpointConfigurationProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `variantName`<sup>Optional</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationProductionVariantsCoreDumpConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationProductionVariantsServerlessConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

### SagemakerEndpointConfigurationShadowProductionVariants <a name="SagemakerEndpointConfigurationShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationShadowProductionVariants: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName">variantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `coreDumpConfig`<sup>Optional</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `initialVariantWeight`<sup>Optional</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `serverlessConfig`<sup>Optional</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `variantName`<sup>Optional</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

const sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig: sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance">resetMaxConcurrentInvocationsPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentInvocationsPerInstance` <a name="resetMaxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance"></a>

```typescript
public resetMaxConcurrentInvocationsPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput">maxConcurrentInvocationsPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">maxConcurrentInvocationsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentInvocationsPerInstanceInput`<sup>Optional</sup> <a name="maxConcurrentInvocationsPerInstanceInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput"></a>

```typescript
public readonly maxConcurrentInvocationsPerInstanceInput: number;
```

- *Type:* number

---

##### `maxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="maxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```typescript
public readonly maxConcurrentInvocationsPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">resetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">resetSuccessTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorTopic` <a name="resetErrorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```typescript
public resetErrorTopic(): void
```

##### `resetSuccessTopic` <a name="resetSuccessTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```typescript
public resetSuccessTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">errorTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">successTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">errorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">successTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorTopicInput`<sup>Optional</sup> <a name="errorTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```typescript
public readonly errorTopicInput: string;
```

- *Type:* string

---

##### `successTopicInput`<sup>Optional</sup> <a name="successTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```typescript
public readonly successTopicInput: string;
```

- *Type:* string

---

##### `errorTopic`<sup>Required</sup> <a name="errorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```typescript
public readonly errorTopic: string;
```

- *Type:* string

---

##### `successTopic`<sup>Required</sup> <a name="successTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```typescript
public readonly successTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```typescript
public readonly s3OutputPathInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig">resetClientConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig"></a>

```typescript
public putClientConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```typescript
public putOutputConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `resetClientConfig` <a name="resetClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```typescript
public resetClientConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```typescript
public readonly clientConfig: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```typescript
public readonly clientConfigInput: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationAsyncInferenceConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes">resetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes">resetJsonContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCsvContentTypes` <a name="resetCsvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes"></a>

```typescript
public resetCsvContentTypes(): void
```

##### `resetJsonContentTypes` <a name="resetJsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes"></a>

```typescript
public resetJsonContentTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput">csvContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput">jsonContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvContentTypesInput`<sup>Optional</sup> <a name="csvContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput"></a>

```typescript
public readonly csvContentTypesInput: string[];
```

- *Type:* string[]

---

##### `jsonContentTypesInput`<sup>Optional</sup> <a name="jsonContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput"></a>

```typescript
public readonly jsonContentTypesInput: string[];
```

- *Type:* string[]

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get"></a>

```typescript
public get(index: number): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput">captureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">captureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureModeInput`<sup>Optional</sup> <a name="captureModeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput"></a>

```typescript
public readonly captureModeInput: string;
```

- *Type:* string

---

##### `captureMode`<sup>Required</sup> <a name="captureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```typescript
public readonly captureMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a> | cdktf.IResolvable

---


### SagemakerEndpointConfigurationDataCaptureConfigOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader">putCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions">putCaptureOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader">resetCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture">resetEnableCapture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaptureContentTypeHeader` <a name="putCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader"></a>

```typescript
public putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `putCaptureOptions` <a name="putCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions"></a>

```typescript
public putCaptureOptions(value: IResolvable | SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]

---

##### `resetCaptureContentTypeHeader` <a name="resetCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader"></a>

```typescript
public resetCaptureContentTypeHeader(): void
```

##### `resetEnableCapture` <a name="resetEnableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture"></a>

```typescript
public resetEnableCapture(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader">captureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions">captureOptions</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput">captureContentTypeHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput">captureOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput">enableCaptureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput">initialSamplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture">enableCapture</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage">initialSamplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureContentTypeHeader`<sup>Required</sup> <a name="captureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```typescript
public readonly captureContentTypeHeader: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `captureOptions`<sup>Required</sup> <a name="captureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions"></a>

```typescript
public readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a>

---

##### `captureContentTypeHeaderInput`<sup>Optional</sup> <a name="captureContentTypeHeaderInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput"></a>

```typescript
public readonly captureContentTypeHeaderInput: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `captureOptionsInput`<sup>Optional</sup> <a name="captureOptionsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput"></a>

```typescript
public readonly captureOptionsInput: IResolvable | SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions</a>[]

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput"></a>

```typescript
public readonly destinationS3UriInput: string;
```

- *Type:* string

---

##### `enableCaptureInput`<sup>Optional</sup> <a name="enableCaptureInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput"></a>

```typescript
public readonly enableCaptureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `initialSamplingPercentageInput`<sup>Optional</sup> <a name="initialSamplingPercentageInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput"></a>

```typescript
public readonly initialSamplingPercentageInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `enableCapture`<sup>Required</sup> <a name="enableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture"></a>

```typescript
public readonly enableCapture: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `initialSamplingPercentage`<sup>Required</sup> <a name="initialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```typescript
public readonly initialSamplingPercentage: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationDataCaptureConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```typescript
public readonly destinationS3UriInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsList <a name="SagemakerEndpointConfigurationProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get"></a>

```typescript
public get(index: number): SagemakerEndpointConfigurationProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerEndpointConfigurationProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a>[]

---


### SagemakerEndpointConfigurationProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig">putCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig">putServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig">resetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount">resetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight">resetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig">resetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName">resetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoreDumpConfig` <a name="putCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig"></a>

```typescript
public putCoreDumpConfig(value: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `putServerlessConfig` <a name="putServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig"></a>

```typescript
public putServerlessConfig(value: SagemakerEndpointConfigurationProductionVariantsServerlessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public resetContainerStartupHealthCheckTimeoutInSeconds(): void
```

##### `resetCoreDumpConfig` <a name="resetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```typescript
public resetCoreDumpConfig(): void
```

##### `resetInitialInstanceCount` <a name="resetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```typescript
public resetInitialInstanceCount(): void
```

##### `resetInitialVariantWeight` <a name="resetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```typescript
public resetInitialVariantWeight(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```typescript
public resetModelDataDownloadTimeoutInSeconds(): void
```

##### `resetServerlessConfig` <a name="resetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig"></a>

```typescript
public resetServerlessConfig(): void
```

##### `resetVariantName` <a name="resetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName"></a>

```typescript
public resetVariantName(): void
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```typescript
public resetVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput">coreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput">initialInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput">initialVariantWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput">serverlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput">variantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a>

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `coreDumpConfigInput`<sup>Optional</sup> <a name="coreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```typescript
public readonly coreDumpConfigInput: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `initialInstanceCountInput`<sup>Optional</sup> <a name="initialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```typescript
public readonly initialInstanceCountInput: number;
```

- *Type:* number

---

##### `initialVariantWeightInput`<sup>Optional</sup> <a name="initialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```typescript
public readonly initialVariantWeightInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```typescript
public readonly modelDataDownloadTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `serverlessConfigInput`<sup>Optional</sup> <a name="serverlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```typescript
public readonly serverlessConfigInput: SagemakerEndpointConfigurationProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput"></a>

```typescript
public readonly variantNameInput: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationProductionVariants | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants">SagemakerEndpointConfigurationProductionVariants</a> | cdktf.IResolvable

---


### SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">memorySizeInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `memorySizeInMbInput`<sup>Optional</sup> <a name="memorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```typescript
public readonly memorySizeInMbInput: number;
```

- *Type:* number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">destinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationS3UriInput`<sup>Optional</sup> <a name="destinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```typescript
public readonly destinationS3UriInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsList <a name="SagemakerEndpointConfigurationShadowProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get"></a>

```typescript
public get(index: number): SagemakerEndpointConfigurationShadowProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerEndpointConfigurationShadowProductionVariants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a>[]

---


### SagemakerEndpointConfigurationShadowProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig">putCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig">putServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig">resetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount">resetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight">resetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig">resetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName">resetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoreDumpConfig` <a name="putCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig"></a>

```typescript
public putCoreDumpConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `putServerlessConfig` <a name="putServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig"></a>

```typescript
public putServerlessConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public resetContainerStartupHealthCheckTimeoutInSeconds(): void
```

##### `resetCoreDumpConfig` <a name="resetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```typescript
public resetCoreDumpConfig(): void
```

##### `resetInitialInstanceCount` <a name="resetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```typescript
public resetInitialInstanceCount(): void
```

##### `resetInitialVariantWeight` <a name="resetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```typescript
public resetInitialVariantWeight(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```typescript
public resetModelDataDownloadTimeoutInSeconds(): void
```

##### `resetServerlessConfig` <a name="resetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig"></a>

```typescript
public resetServerlessConfig(): void
```

##### `resetVariantName` <a name="resetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName"></a>

```typescript
public resetVariantName(): void
```

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```typescript
public resetVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput">coreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput">initialInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput">initialVariantWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput">serverlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput">variantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `coreDumpConfigInput`<sup>Optional</sup> <a name="coreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```typescript
public readonly coreDumpConfigInput: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `initialInstanceCountInput`<sup>Optional</sup> <a name="initialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```typescript
public readonly initialInstanceCountInput: number;
```

- *Type:* number

---

##### `initialVariantWeightInput`<sup>Optional</sup> <a name="initialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```typescript
public readonly initialVariantWeightInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```typescript
public readonly modelDataDownloadTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `serverlessConfigInput`<sup>Optional</sup> <a name="serverlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```typescript
public readonly serverlessConfigInput: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput"></a>

```typescript
public readonly variantNameInput: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationShadowProductionVariants | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants">SagemakerEndpointConfigurationShadowProductionVariants</a> | cdktf.IResolvable

---


### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpointConfiguration } from '@cdktf/provider-aws'

new sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">memorySizeInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `memorySizeInMbInput`<sup>Optional</sup> <a name="memorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```typescript
public readonly memorySizeInMbInput: number;
```

- *Type:* number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---



