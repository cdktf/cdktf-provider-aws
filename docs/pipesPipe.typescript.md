# `aws_pipes_pipe`

Refer to the Terraform Registory for docs: [`aws_pipes_pipe`](https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe).

# `pipesPipe` Submodule <a name="`pipesPipe` Submodule" id="@cdktf/provider-aws.pipesPipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipesPipe <a name="PipesPipe" id="@cdktf/provider-aws.pipesPipe.PipesPipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe aws_pipes_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipe(scope: Construct, id: string, config: PipesPipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig">PipesPipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig">PipesPipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters">putSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters">putTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment">resetEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSourceParameters` <a name="putSourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters"></a>

```typescript
public putSourceParameters(value: PipesPipeSourceParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---

##### `putTargetParameters` <a name="putTargetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters"></a>

```typescript
public putTargetParameters(value: PipesPipeTargetParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts"></a>

```typescript
public putTimeouts(value: PipesPipeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetEnrichment` <a name="resetEnrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment"></a>

```typescript
public resetEnrichment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

pipesPipe.PipesPipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

pipesPipe.PipesPipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

pipesPipe.PipesPipe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters">sourceParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters">targetParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput">enrichmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput">sourceParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput">targetParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment">enrichment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Required</sup> <a name="sourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipesPipeSourceParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a>

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipesPipeTargetParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts"></a>

```typescript
public readonly timeouts: PipesPipeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `enrichmentInput`<sup>Optional</sup> <a name="enrichmentInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput"></a>

```typescript
public readonly enrichmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceParametersInput`<sup>Optional</sup> <a name="sourceParametersInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput"></a>

```typescript
public readonly sourceParametersInput: PipesPipeSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `targetParametersInput`<sup>Optional</sup> <a name="targetParametersInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput"></a>

```typescript
public readonly targetParametersInput: PipesPipeTargetParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: PipesPipeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `enrichment`<sup>Required</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment"></a>

```typescript
public readonly enrichment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipesPipeConfig <a name="PipesPipeConfig" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeConfig: pipesPipe.PipesPipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#source PipesPipe#source}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters">sourceParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | source_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#target PipesPipe#target}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters">targetParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | target_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#description PipesPipe#description}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment">enrichment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#id PipesPipe#id}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#name PipesPipe#name}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#tags PipesPipe#tags}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#source PipesPipe#source}.

---

##### `sourceParameters`<sup>Required</sup> <a name="sourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipesPipeSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

source_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#target PipesPipe#target}.

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipesPipeTargetParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

target_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#description PipesPipe#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment"></a>

```typescript
public readonly enrichment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#id PipesPipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#name PipesPipe#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#tags PipesPipe#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PipesPipeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}

---

### PipesPipeSourceParameters <a name="PipesPipeSourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeSourceParameters: pipesPipe.PipesPipeSourceParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | filter_criteria block. |

---

##### `filterCriteria`<sup>Optional</sup> <a name="filterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria"></a>

```typescript
public readonly filterCriteria: PipesPipeSourceParametersFilterCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}

---

### PipesPipeSourceParametersFilterCriteria <a name="PipesPipeSourceParametersFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeSourceParametersFilterCriteria: pipesPipe.PipesPipeSourceParametersFilterCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter"></a>

```typescript
public readonly filter: IResolvable | PipesPipeSourceParametersFilterCriteriaFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#filter PipesPipe#filter}

---

### PipesPipeSourceParametersFilterCriteriaFilter <a name="PipesPipeSourceParametersFilterCriteriaFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeSourceParametersFilterCriteriaFilter: pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}.

---

### PipesPipeTargetParameters <a name="PipesPipeTargetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeTargetParameters: pipesPipe.PipesPipeTargetParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}.

---

### PipesPipeTimeouts <a name="PipesPipeTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

const pipesPipeTimeouts: pipesPipe.PipesPipeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#create PipesPipe#create}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#delete PipesPipe#delete}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#update PipesPipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#create PipesPipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#delete PipesPipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.64.0/docs/resources/pipes_pipe#update PipesPipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipesPipeSourceParametersFilterCriteriaFilterList <a name="PipesPipeSourceParametersFilterCriteriaFilterList" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get"></a>

```typescript
public get(index: number): PipesPipeSourceParametersFilterCriteriaFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipesPipeSourceParametersFilterCriteriaFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]

---


### PipesPipeSourceParametersFilterCriteriaFilterOutputReference <a name="PipesPipeSourceParametersFilterCriteriaFilterOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PipesPipeSourceParametersFilterCriteriaFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a> | cdktf.IResolvable

---


### PipesPipeSourceParametersFilterCriteriaOutputReference <a name="PipesPipeSourceParametersFilterCriteriaOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | PipesPipeSourceParametersFilterCriteriaFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter"></a>

```typescript
public readonly filter: PipesPipeSourceParametersFilterCriteriaFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | PipesPipeSourceParametersFilterCriteriaFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PipesPipeSourceParametersFilterCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---


### PipesPipeSourceParametersOutputReference <a name="PipesPipeSourceParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeSourceParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria">putFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria">resetFilterCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterCriteria` <a name="putFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria"></a>

```typescript
public putFilterCriteria(value: PipesPipeSourceParametersFilterCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---

##### `resetFilterCriteria` <a name="resetFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria"></a>

```typescript
public resetFilterCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput">filterCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterCriteria`<sup>Required</sup> <a name="filterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria"></a>

```typescript
public readonly filterCriteria: PipesPipeSourceParametersFilterCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a>

---

##### `filterCriteriaInput`<sup>Optional</sup> <a name="filterCriteriaInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput"></a>

```typescript
public readonly filterCriteriaInput: PipesPipeSourceParametersFilterCriteria;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PipesPipeSourceParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---


### PipesPipeTargetParametersOutputReference <a name="PipesPipeTargetParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeTargetParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate">resetInputTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputTemplate` <a name="resetInputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate"></a>

```typescript
public resetInputTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput">inputTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputTemplateInput`<sup>Optional</sup> <a name="inputTemplateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput"></a>

```typescript
public readonly inputTemplateInput: string;
```

- *Type:* string

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PipesPipeTargetParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---


### PipesPipeTimeoutsOutputReference <a name="PipesPipeTimeoutsOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer"></a>

```typescript
import { pipesPipe } from '@cdktf/provider-aws'

new pipesPipe.PipesPipeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PipesPipeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> | cdktf.IResolvable

---



