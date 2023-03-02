# `batchJobDefinition` Submodule <a name="`batchJobDefinition` Submodule" id="@cdktf/provider-aws.batchJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobDefinition <a name="BatchJobDefinition" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition aws_batch_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinition(scope: Construct, id: string, config: BatchJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy">putRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties">resetContainerProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities">resetPlatformCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy">resetRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetryStrategy` <a name="putRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy"></a>

```typescript
public putRetryStrategy(value: BatchJobDefinitionRetryStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout"></a>

```typescript
public putTimeout(value: BatchJobDefinitionTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `resetContainerProperties` <a name="resetContainerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties"></a>

```typescript
public resetContainerProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPlatformCapabilities` <a name="resetPlatformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities"></a>

```typescript
public resetPlatformCapabilities(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetRetryStrategy` <a name="resetRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy"></a>

```typescript
public resetRetryStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput">containerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput">platformCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput">propagateTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput">retryStrategyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties">containerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities">platformCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags">propagateTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `retryStrategy`<sup>Required</sup> <a name="retryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: BatchJobDefinitionRetryStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout"></a>

```typescript
public readonly timeout: BatchJobDefinitionTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a>

---

##### `containerPropertiesInput`<sup>Optional</sup> <a name="containerPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput"></a>

```typescript
public readonly containerPropertiesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformCapabilitiesInput`<sup>Optional</sup> <a name="platformCapabilitiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput"></a>

```typescript
public readonly platformCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryStrategyInput`<sup>Optional</sup> <a name="retryStrategyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput"></a>

```typescript
public readonly retryStrategyInput: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerProperties`<sup>Required</sup> <a name="containerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties"></a>

```typescript
public readonly containerProperties: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformCapabilities`<sup>Required</sup> <a name="platformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities"></a>

```typescript
public readonly platformCapabilities: string[];
```

- *Type:* string[]

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags"></a>

```typescript
public readonly propagateTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobDefinitionConfig <a name="BatchJobDefinitionConfig" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionConfig: batchJobDefinition.BatchJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#type BatchJobDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties">containerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#container_properties BatchJobDefinition#container_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#id BatchJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#parameters BatchJobDefinition#parameters}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities">platformCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags">propagateTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | retry_strategy block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags BatchJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags_all BatchJobDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | timeout block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#name BatchJobDefinition#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#type BatchJobDefinition#type}.

---

##### `containerProperties`<sup>Optional</sup> <a name="containerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties"></a>

```typescript
public readonly containerProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#container_properties BatchJobDefinition#container_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#id BatchJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#parameters BatchJobDefinition#parameters}.

---

##### `platformCapabilities`<sup>Optional</sup> <a name="platformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities"></a>

```typescript
public readonly platformCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags"></a>

```typescript
public readonly propagateTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}.

---

##### `retryStrategy`<sup>Optional</sup> <a name="retryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

retry_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags BatchJobDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags_all BatchJobDefinition#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout"></a>

```typescript
public readonly timeout: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#timeout BatchJobDefinition#timeout}

---

### BatchJobDefinitionRetryStrategy <a name="BatchJobDefinitionRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionRetryStrategy: batchJobDefinition.BatchJobDefinitionRetryStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts">attempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempts BatchJobDefinition#attempts}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit">evaluateOnExit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | evaluate_on_exit block. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempts BatchJobDefinition#attempts}.

---

##### `evaluateOnExit`<sup>Optional</sup> <a name="evaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit"></a>

```typescript
public readonly evaluateOnExit: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

evaluate_on_exit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}

---

### BatchJobDefinitionRetryStrategyEvaluateOnExit <a name="BatchJobDefinitionRetryStrategyEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionRetryStrategyEvaluateOnExit: batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#action BatchJobDefinition#action}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode">onExitCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason">onReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_reason BatchJobDefinition#on_reason}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason">onStatusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#action BatchJobDefinition#action}.

---

##### `onExitCode`<sup>Optional</sup> <a name="onExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode"></a>

```typescript
public readonly onExitCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}.

---

##### `onReason`<sup>Optional</sup> <a name="onReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason"></a>

```typescript
public readonly onReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_reason BatchJobDefinition#on_reason}.

---

##### `onStatusReason`<sup>Optional</sup> <a name="onStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason"></a>

```typescript
public readonly onStatusReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}.

---

### BatchJobDefinitionTimeout <a name="BatchJobDefinitionTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionTimeout: batchJobDefinition.BatchJobDefinitionTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds">attemptDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}. |

---

##### `attemptDurationSeconds`<sup>Optional</sup> <a name="attemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds"></a>

```typescript
public readonly attemptDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobDefinitionRetryStrategyEvaluateOnExitList <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode">resetOnExitCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason">resetOnReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason">resetOnStatusReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnExitCode` <a name="resetOnExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode"></a>

```typescript
public resetOnExitCode(): void
```

##### `resetOnReason` <a name="resetOnReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason"></a>

```typescript
public resetOnReason(): void
```

##### `resetOnStatusReason` <a name="resetOnStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason"></a>

```typescript
public resetOnStatusReason(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput">onExitCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput">onReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput">onStatusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode">onExitCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason">onReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason">onStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `onExitCodeInput`<sup>Optional</sup> <a name="onExitCodeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput"></a>

```typescript
public readonly onExitCodeInput: string;
```

- *Type:* string

---

##### `onReasonInput`<sup>Optional</sup> <a name="onReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput"></a>

```typescript
public readonly onReasonInput: string;
```

- *Type:* string

---

##### `onStatusReasonInput`<sup>Optional</sup> <a name="onStatusReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput"></a>

```typescript
public readonly onStatusReasonInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `onExitCode`<sup>Required</sup> <a name="onExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode"></a>

```typescript
public readonly onExitCode: string;
```

- *Type:* string

---

##### `onReason`<sup>Required</sup> <a name="onReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason"></a>

```typescript
public readonly onReason: string;
```

- *Type:* string

---

##### `onStatusReason`<sup>Required</sup> <a name="onStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason"></a>

```typescript
public readonly onStatusReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionRetryStrategyEvaluateOnExit | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a> | cdktf.IResolvable

---


### BatchJobDefinitionRetryStrategyOutputReference <a name="BatchJobDefinitionRetryStrategyOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit">putEvaluateOnExit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts">resetAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit">resetEvaluateOnExit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluateOnExit` <a name="putEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit"></a>

```typescript
public putEvaluateOnExit(value: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---

##### `resetAttempts` <a name="resetAttempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts"></a>

```typescript
public resetAttempts(): void
```

##### `resetEvaluateOnExit` <a name="resetEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit"></a>

```typescript
public resetEvaluateOnExit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit">evaluateOnExit</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput">evaluateOnExitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluateOnExit`<sup>Required</sup> <a name="evaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit"></a>

```typescript
public readonly evaluateOnExit: BatchJobDefinitionRetryStrategyEvaluateOnExitList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a>

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput"></a>

```typescript
public readonly attemptsInput: number;
```

- *Type:* number

---

##### `evaluateOnExitInput`<sup>Optional</sup> <a name="evaluateOnExitInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput"></a>

```typescript
public readonly evaluateOnExitInput: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---


### BatchJobDefinitionTimeoutOutputReference <a name="BatchJobDefinitionTimeoutOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds">resetAttemptDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttemptDurationSeconds` <a name="resetAttemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds"></a>

```typescript
public resetAttemptDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput">attemptDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds">attemptDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attemptDurationSecondsInput`<sup>Optional</sup> <a name="attemptDurationSecondsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput"></a>

```typescript
public readonly attemptDurationSecondsInput: number;
```

- *Type:* number

---

##### `attemptDurationSeconds`<sup>Required</sup> <a name="attemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds"></a>

```typescript
public readonly attemptDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---



