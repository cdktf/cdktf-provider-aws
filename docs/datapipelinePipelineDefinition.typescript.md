# `datapipelinePipelineDefinition` Submodule <a name="`datapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.datapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipelineDefinition <a name="DatapipelinePipelineDefinition" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinition(scope: Construct, id: string, config: DatapipelinePipelineDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig">DatapipelinePipelineDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig">DatapipelinePipelineDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject">putParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject">putPipelineObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject">resetParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameterObject` <a name="putParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject"></a>

```typescript
public putParameterObject(value: IResolvable | DatapipelinePipelineDefinitionParameterObject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]

---

##### `putParameterValue` <a name="putParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue"></a>

```typescript
public putParameterValue(value: IResolvable | DatapipelinePipelineDefinitionParameterValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]

---

##### `putPipelineObject` <a name="putPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject"></a>

```typescript
public putPipelineObject(value: IResolvable | DatapipelinePipelineDefinitionPipelineObject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameterObject` <a name="resetParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject"></a>

```typescript
public resetParameterObject(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject">parameterObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject">pipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput">parameterObjectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput">parameterValueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput">pipelineObjectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameterObject`<sup>Required</sup> <a name="parameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject"></a>

```typescript
public readonly parameterObject: DatapipelinePipelineDefinitionParameterObjectList;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue"></a>

```typescript
public readonly parameterValue: DatapipelinePipelineDefinitionParameterValueList;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject"></a>

```typescript
public readonly pipelineObject: DatapipelinePipelineDefinitionPipelineObjectList;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterObjectInput`<sup>Optional</sup> <a name="parameterObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput"></a>

```typescript
public readonly parameterObjectInput: IResolvable | DatapipelinePipelineDefinitionParameterObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: IResolvable | DatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `pipelineObjectInput`<sup>Optional</sup> <a name="pipelineObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput"></a>

```typescript
public readonly pipelineObjectInput: IResolvable | DatapipelinePipelineDefinitionPipelineObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineDefinitionConfig <a name="DatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionConfig: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject">pipelineObject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]</code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject">parameterObject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]</code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue">parameterValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]</code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject"></a>

```typescript
public readonly pipelineObject: IResolvable | DatapipelinePipelineDefinitionPipelineObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterObject`<sup>Optional</sup> <a name="parameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject"></a>

```typescript
public readonly parameterObject: IResolvable | DatapipelinePipelineDefinitionParameterObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```typescript
public readonly parameterValue: IResolvable | DatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

### DatapipelinePipelineDefinitionParameterObject <a name="DatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionParameterObject: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute">attribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]</code> | attribute block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute"></a>

```typescript
public readonly attribute: IResolvable | DatapipelinePipelineDefinitionParameterObjectAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}

---

### DatapipelinePipelineDefinitionParameterObjectAttribute <a name="DatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionParameterObjectAttribute: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionParameterValue <a name="DatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionParameterValue: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionPipelineObject <a name="DatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionPipelineObject: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field">field</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]</code> | field block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field"></a>

```typescript
public readonly field: IResolvable | DatapipelinePipelineDefinitionPipelineObjectField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]

field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}

---

### DatapipelinePipelineDefinitionPipelineObjectField <a name="DatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

const datapipelinePipelineDefinitionPipelineObjectField: datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue">refValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `refValue`<sup>Optional</sup> <a name="refValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue"></a>

```typescript
public readonly refValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineDefinitionParameterObjectAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]

---


### DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatapipelinePipelineDefinitionParameterObjectAttribute | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a> | cdktf.IResolvable

---


### DatapipelinePipelineDefinitionParameterObjectList <a name="DatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineDefinitionParameterObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineDefinitionParameterObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>[]

---


### DatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute"></a>

```typescript
public putAttribute(value: IResolvable | DatapipelinePipelineDefinitionParameterObjectAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput">attributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: DatapipelinePipelineDefinitionParameterObjectAttributeList;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: IResolvable | DatapipelinePipelineDefinitionParameterObjectAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatapipelinePipelineDefinitionParameterObject | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a> | cdktf.IResolvable

---


### DatapipelinePipelineDefinitionParameterValueList <a name="DatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineDefinitionParameterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>[]

---


### DatapipelinePipelineDefinitionParameterValueOutputReference <a name="DatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatapipelinePipelineDefinitionParameterValue | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a> | cdktf.IResolvable

---


### DatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineDefinitionPipelineObjectField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]

---


### DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue">resetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefValue` <a name="resetRefValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue"></a>

```typescript
public resetRefValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput">refValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">refValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `refValueInput`<sup>Optional</sup> <a name="refValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput"></a>

```typescript
public readonly refValueInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```typescript
public readonly refValue: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatapipelinePipelineDefinitionPipelineObjectField | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a> | cdktf.IResolvable

---


### DatapipelinePipelineDefinitionPipelineObjectList <a name="DatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```typescript
public get(index: number): DatapipelinePipelineDefinitionPipelineObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatapipelinePipelineDefinitionPipelineObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>[]

---


### DatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```typescript
import { datapipelinePipelineDefinition } from '@cdktf/provider-aws'

new datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField"></a>

```typescript
public putField(value: IResolvable | DatapipelinePipelineDefinitionPipelineObjectField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]

---

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput">fieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```typescript
public readonly field: DatapipelinePipelineDefinitionPipelineObjectFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: IResolvable | DatapipelinePipelineDefinitionPipelineObjectField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatapipelinePipelineDefinitionPipelineObject | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a> | cdktf.IResolvable

---



