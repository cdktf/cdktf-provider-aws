# `ecsTaskDefinition` Submodule <a name="`ecsTaskDefinition` Submodule" id="@cdktf/provider-aws.ecsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskDefinition <a name="EcsTaskDefinition" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition aws_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinition(scope: Construct, id: string, config: EcsTaskDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage">putEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator">putInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration">putProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform">putRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator">resetInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode">resetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode">resetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration">resetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities">resetRequiresCompatibilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform">resetRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy">resetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEphemeralStorage` <a name="putEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage"></a>

```typescript
public putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `putInferenceAccelerator` <a name="putInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator"></a>

```typescript
public putInferenceAccelerator(value: IResolvable | EcsTaskDefinitionInferenceAccelerator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints"></a>

```typescript
public putPlacementConstraints(value: IResolvable | EcsTaskDefinitionPlacementConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]

---

##### `putProxyConfiguration` <a name="putProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration"></a>

```typescript
public putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `putRuntimePlatform` <a name="putRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform"></a>

```typescript
public putRuntimePlatform(value: EcsTaskDefinitionRuntimePlatform): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume"></a>

```typescript
public putVolume(value: IResolvable | EcsTaskDefinitionVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]

---

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInferenceAccelerator` <a name="resetInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator"></a>

```typescript
public resetInferenceAccelerator(): void
```

##### `resetIpcMode` <a name="resetIpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode"></a>

```typescript
public resetIpcMode(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetPidMode` <a name="resetPidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode"></a>

```typescript
public resetPidMode(): void
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints"></a>

```typescript
public resetPlacementConstraints(): void
```

##### `resetProxyConfiguration` <a name="resetProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration"></a>

```typescript
public resetProxyConfiguration(): void
```

##### `resetRequiresCompatibilities` <a name="resetRequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities"></a>

```typescript
public resetRequiresCompatibilities(): void
```

##### `resetRuntimePlatform` <a name="resetRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform"></a>

```typescript
public resetRuntimePlatform(): void
```

##### `resetSkipDestroy` <a name="resetSkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy"></a>

```typescript
public resetSkipDestroy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn"></a>

```typescript
public resetTaskRoleArn(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

ecsTaskDefinition.EcsTaskDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

ecsTaskDefinition.EcsTaskDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

ecsTaskDefinition.EcsTaskDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator">inferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration">proxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform">runtimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput">containerDefinitionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput">inferenceAcceleratorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput">ipcModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput">pidModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput">proxyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput">requiresCompatibilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput">runtimePlatformInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput">skipDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions">containerDefinitions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode">ipcMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode">pidMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities">requiresCompatibilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: EcsTaskDefinitionEphemeralStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `inferenceAccelerator`<sup>Required</sup> <a name="inferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator"></a>

```typescript
public readonly inferenceAccelerator: EcsTaskDefinitionInferenceAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: EcsTaskDefinitionPlacementConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a>

---

##### `proxyConfiguration`<sup>Required</sup> <a name="proxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: EcsTaskDefinitionProxyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `runtimePlatform`<sup>Required</sup> <a name="runtimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform"></a>

```typescript
public readonly runtimePlatform: EcsTaskDefinitionRuntimePlatformOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume"></a>

```typescript
public readonly volume: EcsTaskDefinitionVolumeList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a>

---

##### `containerDefinitionsInput`<sup>Optional</sup> <a name="containerDefinitionsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput"></a>

```typescript
public readonly containerDefinitionsInput: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: EcsTaskDefinitionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inferenceAcceleratorInput`<sup>Optional</sup> <a name="inferenceAcceleratorInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput"></a>

```typescript
public readonly inferenceAcceleratorInput: IResolvable | EcsTaskDefinitionInferenceAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]

---

##### `ipcModeInput`<sup>Optional</sup> <a name="ipcModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput"></a>

```typescript
public readonly ipcModeInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `pidModeInput`<sup>Optional</sup> <a name="pidModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput"></a>

```typescript
public readonly pidModeInput: string;
```

- *Type:* string

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput"></a>

```typescript
public readonly placementConstraintsInput: IResolvable | EcsTaskDefinitionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]

---

##### `proxyConfigurationInput`<sup>Optional</sup> <a name="proxyConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput"></a>

```typescript
public readonly proxyConfigurationInput: EcsTaskDefinitionProxyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `requiresCompatibilitiesInput`<sup>Optional</sup> <a name="requiresCompatibilitiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput"></a>

```typescript
public readonly requiresCompatibilitiesInput: string[];
```

- *Type:* string[]

---

##### `runtimePlatformInput`<sup>Optional</sup> <a name="runtimePlatformInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput"></a>

```typescript
public readonly runtimePlatformInput: EcsTaskDefinitionRuntimePlatform;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `skipDestroyInput`<sup>Optional</sup> <a name="skipDestroyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput"></a>

```typescript
public readonly skipDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput"></a>

```typescript
public readonly taskRoleArnInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | EcsTaskDefinitionVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]

---

##### `containerDefinitions`<sup>Required</sup> <a name="containerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions"></a>

```typescript
public readonly containerDefinitions: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

---

##### `requiresCompatibilities`<sup>Required</sup> <a name="requiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities"></a>

```typescript
public readonly requiresCompatibilities: string[];
```

- *Type:* string[]

---

##### `skipDestroy`<sup>Required</sup> <a name="skipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskDefinitionConfig <a name="EcsTaskDefinitionConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionConfig: ecsTaskDefinition.EcsTaskDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions">containerDefinitions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family">family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator">inferenceAccelerator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]</code> | inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode">ipcMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode">networkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode">pidMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints">placementConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration">proxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities">requiresCompatibilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform">runtimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | runtime_platform block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerDefinitions`<sup>Required</sup> <a name="containerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions"></a>

```typescript
public readonly containerDefinitions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}.

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: EcsTaskDefinitionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceAccelerator`<sup>Optional</sup> <a name="inferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator"></a>

```typescript
public readonly inferenceAccelerator: IResolvable | EcsTaskDefinitionInferenceAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]

inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}.

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: IResolvable | EcsTaskDefinitionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="proxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: EcsTaskDefinitionProxyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}

---

##### `requiresCompatibilities`<sup>Optional</sup> <a name="requiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities"></a>

```typescript
public readonly requiresCompatibilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.

---

##### `runtimePlatform`<sup>Optional</sup> <a name="runtimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform"></a>

```typescript
public readonly runtimePlatform: EcsTaskDefinitionRuntimePlatform;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

runtime_platform block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume"></a>

```typescript
public readonly volume: IResolvable | EcsTaskDefinitionVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#volume EcsTaskDefinition#volume}

---

### EcsTaskDefinitionEphemeralStorage <a name="EcsTaskDefinitionEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionEphemeralStorage: ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib">sizeInGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}. |

---

##### `sizeInGib`<sup>Required</sup> <a name="sizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib"></a>

```typescript
public readonly sizeInGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}.

---

### EcsTaskDefinitionInferenceAccelerator <a name="EcsTaskDefinitionInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionInferenceAccelerator: ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType">deviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}.

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}.

---

### EcsTaskDefinitionPlacementConstraints <a name="EcsTaskDefinitionPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionPlacementConstraints: ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}.

---

### EcsTaskDefinitionProxyConfiguration <a name="EcsTaskDefinitionProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionProxyConfiguration: ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

### EcsTaskDefinitionRuntimePlatform <a name="EcsTaskDefinitionRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionRuntimePlatform: ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture">cpuArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily">operatingSystemFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}. |

---

##### `cpuArchitecture`<sup>Optional</sup> <a name="cpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture"></a>

```typescript
public readonly cpuArchitecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}.

---

##### `operatingSystemFamily`<sup>Optional</sup> <a name="operatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily"></a>

```typescript
public readonly operatingSystemFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}.

---

### EcsTaskDefinitionVolume <a name="EcsTaskDefinitionVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolume: ecsTaskDefinition.EcsTaskDefinitionVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration">dockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | docker_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration">efsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | efs_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration">fsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | fsx_windows_file_server_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath">hostPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}.

---

##### `dockerVolumeConfiguration`<sup>Optional</sup> <a name="dockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration"></a>

```typescript
public readonly dockerVolumeConfiguration: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

docker_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}

---

##### `efsVolumeConfiguration`<sup>Optional</sup> <a name="efsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration"></a>

```typescript
public readonly efsVolumeConfiguration: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

efs_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}

---

##### `fsxWindowsFileServerVolumeConfiguration`<sup>Optional</sup> <a name="fsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration"></a>

```typescript
public readonly fsxWindowsFileServerVolumeConfiguration: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

fsx_windows_file_server_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}.

---

### EcsTaskDefinitionVolumeDockerVolumeConfiguration <a name="EcsTaskDefinitionVolumeDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolumeDockerVolumeConfiguration: ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision">autoprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver">driver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts">driverOpts</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}. |

---

##### `autoprovision`<sup>Optional</sup> <a name="autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision"></a>

```typescript
public readonly autoprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}.

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}.

---

##### `driverOpts`<sup>Optional</sup> <a name="driverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts"></a>

```typescript
public readonly driverOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfiguration <a name="EcsTaskDefinitionVolumeEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolumeEfsVolumeConfiguration: ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption">transitEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort">transitEncryptionPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

##### `transitEncryption`<sup>Optional</sup> <a name="transitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption"></a>

```typescript
public readonly transitEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}.

---

##### `transitEncryptionPort`<sup>Optional</sup> <a name="transitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort"></a>

```typescript
public readonly transitEncryptionPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig: ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId">accessPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam">iam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}. |

---

##### `accessPointId`<sup>Optional</sup> <a name="accessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}.

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration: ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

const ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig: ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}. |

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskDefinitionEphemeralStorageOutputReference <a name="EcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput">sizeInGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib">sizeInGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInGibInput`<sup>Optional</sup> <a name="sizeInGibInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput"></a>

```typescript
public readonly sizeInGibInput: number;
```

- *Type:* number

---

##### `sizeInGib`<sup>Required</sup> <a name="sizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib"></a>

```typescript
public readonly sizeInGib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionEphemeralStorage;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---


### EcsTaskDefinitionInferenceAcceleratorList <a name="EcsTaskDefinitionInferenceAcceleratorList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get"></a>

```typescript
public get(index: number): EcsTaskDefinitionInferenceAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsTaskDefinitionInferenceAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a>[]

---


### EcsTaskDefinitionInferenceAcceleratorOutputReference <a name="EcsTaskDefinitionInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionInferenceAccelerator | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator">EcsTaskDefinitionInferenceAccelerator</a> | cdktf.IResolvable

---


### EcsTaskDefinitionPlacementConstraintsList <a name="EcsTaskDefinitionPlacementConstraintsList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get"></a>

```typescript
public get(index: number): EcsTaskDefinitionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsTaskDefinitionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a>[]

---


### EcsTaskDefinitionPlacementConstraintsOutputReference <a name="EcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionPlacementConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints">EcsTaskDefinitionPlacementConstraints</a> | cdktf.IResolvable

---


### EcsTaskDefinitionProxyConfigurationOutputReference <a name="EcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionProxyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---


### EcsTaskDefinitionRuntimePlatformOutputReference <a name="EcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture">resetCpuArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily">resetOperatingSystemFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuArchitecture` <a name="resetCpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture"></a>

```typescript
public resetCpuArchitecture(): void
```

##### `resetOperatingSystemFamily` <a name="resetOperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily"></a>

```typescript
public resetOperatingSystemFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput">cpuArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput">operatingSystemFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">cpuArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">operatingSystemFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuArchitectureInput`<sup>Optional</sup> <a name="cpuArchitectureInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput"></a>

```typescript
public readonly cpuArchitectureInput: string;
```

- *Type:* string

---

##### `operatingSystemFamilyInput`<sup>Optional</sup> <a name="operatingSystemFamilyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput"></a>

```typescript
public readonly operatingSystemFamilyInput: string;
```

- *Type:* string

---

##### `cpuArchitecture`<sup>Required</sup> <a name="cpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```typescript
public readonly cpuArchitecture: string;
```

- *Type:* string

---

##### `operatingSystemFamily`<sup>Required</sup> <a name="operatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```typescript
public readonly operatingSystemFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionRuntimePlatform;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---


### EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision">resetAutoprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver">resetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts">resetDriverOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoprovision` <a name="resetAutoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision"></a>

```typescript
public resetAutoprovision(): void
```

##### `resetDriver` <a name="resetDriver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver"></a>

```typescript
public resetDriver(): void
```

##### `resetDriverOpts` <a name="resetDriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts"></a>

```typescript
public resetDriverOpts(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput">autoprovisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput">driverOptsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision">autoprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts">driverOpts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoprovisionInput`<sup>Optional</sup> <a name="autoprovisionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput"></a>

```typescript
public readonly autoprovisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `driverOptsInput`<sup>Optional</sup> <a name="driverOptsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput"></a>

```typescript
public readonly driverOptsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `autoprovision`<sup>Required</sup> <a name="autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```typescript
public readonly autoprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `driverOpts`<sup>Required</sup> <a name="driverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```typescript
public readonly driverOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId">resetAccessPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam">resetIam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessPointId` <a name="resetAccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId"></a>

```typescript
public resetAccessPointId(): void
```

##### `resetIam` <a name="resetIam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam"></a>

```typescript
public resetIam(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput">accessPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput">iamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">accessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">iam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointIdInput`<sup>Optional</sup> <a name="accessPointIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput"></a>

```typescript
public readonly accessPointIdInput: string;
```

- *Type:* string

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput"></a>

```typescript
public readonly iamInput: string;
```

- *Type:* string

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory">resetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption">resetTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort">resetTransitEncryptionPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetRootDirectory` <a name="resetRootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory"></a>

```typescript
public resetRootDirectory(): void
```

##### `resetTransitEncryption` <a name="resetTransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption"></a>

```typescript
public resetTransitEncryption(): void
```

##### `resetTransitEncryptionPort` <a name="resetTransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort"></a>

```typescript
public resetTransitEncryptionPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput">transitEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput">transitEncryptionPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption">transitEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">transitEncryptionPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: string;
```

- *Type:* string

---

##### `transitEncryptionInput`<sup>Optional</sup> <a name="transitEncryptionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput"></a>

```typescript
public readonly transitEncryptionInput: string;
```

- *Type:* string

---

##### `transitEncryptionPortInput`<sup>Optional</sup> <a name="transitEncryptionPortInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput"></a>

```typescript
public readonly transitEncryptionPortInput: number;
```

- *Type:* number

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `transitEncryption`<sup>Required</sup> <a name="transitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```typescript
public readonly transitEncryption: string;
```

- *Type:* string

---

##### `transitEncryptionPort`<sup>Required</sup> <a name="transitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```typescript
public readonly transitEncryptionPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput">credentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameterInput`<sup>Optional</sup> <a name="credentialsParameterInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput"></a>

```typescript
public readonly credentialsParameterInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeList <a name="EcsTaskDefinitionVolumeList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get"></a>

```typescript
public get(index: number): EcsTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsTaskDefinitionVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a>[]

---


### EcsTaskDefinitionVolumeOutputReference <a name="EcsTaskDefinitionVolumeOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer"></a>

```typescript
import { ecsTaskDefinition } from '@cdktf/provider-aws'

new ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration">putDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration">putEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration">putFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration">resetDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration">resetEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration">resetFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDockerVolumeConfiguration` <a name="putDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration"></a>

```typescript
public putDockerVolumeConfiguration(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `putEfsVolumeConfiguration` <a name="putEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration"></a>

```typescript
public putEfsVolumeConfiguration(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `putFsxWindowsFileServerVolumeConfiguration` <a name="putFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration"></a>

```typescript
public putFsxWindowsFileServerVolumeConfiguration(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `resetDockerVolumeConfiguration` <a name="resetDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration"></a>

```typescript
public resetDockerVolumeConfiguration(): void
```

##### `resetEfsVolumeConfiguration` <a name="resetEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration"></a>

```typescript
public resetEfsVolumeConfiguration(): void
```

##### `resetFsxWindowsFileServerVolumeConfiguration` <a name="resetFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration"></a>

```typescript
public resetFsxWindowsFileServerVolumeConfiguration(): void
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath"></a>

```typescript
public resetHostPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration">dockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration">efsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration">fsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput">dockerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput">efsVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput">fsxWindowsFileServerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dockerVolumeConfiguration`<sup>Required</sup> <a name="dockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration"></a>

```typescript
public readonly dockerVolumeConfiguration: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a>

---

##### `efsVolumeConfiguration`<sup>Required</sup> <a name="efsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration"></a>

```typescript
public readonly efsVolumeConfiguration: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a>

---

##### `fsxWindowsFileServerVolumeConfiguration`<sup>Required</sup> <a name="fsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```typescript
public readonly fsxWindowsFileServerVolumeConfiguration: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `dockerVolumeConfigurationInput`<sup>Optional</sup> <a name="dockerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput"></a>

```typescript
public readonly dockerVolumeConfigurationInput: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `efsVolumeConfigurationInput`<sup>Optional</sup> <a name="efsVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput"></a>

```typescript
public readonly efsVolumeConfigurationInput: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `fsxWindowsFileServerVolumeConfigurationInput`<sup>Optional</sup> <a name="fsxWindowsFileServerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput"></a>

```typescript
public readonly fsxWindowsFileServerVolumeConfigurationInput: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsTaskDefinitionVolume | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume">EcsTaskDefinitionVolume</a> | cdktf.IResolvable

---



