# `dataAwsDatapipelinePipelineDefinition` Submodule <a name="`dataAwsDatapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatapipelinePipelineDefinition <a name="DataAwsDatapipelinePipelineDefinition" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition(scope: Construct, id: string, config: DataAwsDatapipelinePipelineDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig">DataAwsDatapipelinePipelineDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig">DataAwsDatapipelinePipelineDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameterValue` <a name="putParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue"></a>

```typescript
public putParameterValue(value: IResolvable | DataAwsDatapipelinePipelineDefinitionParameterValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject">parameterObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject">pipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput">parameterValueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `parameterObject`<sup>Required</sup> <a name="parameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject"></a>

```typescript
public readonly parameterObject: DataAwsDatapipelinePipelineDefinitionParameterObjectList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue"></a>

```typescript
public readonly parameterValue: DataAwsDatapipelinePipelineDefinitionParameterValueList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipelineObject`<sup>Required</sup> <a name="pipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject"></a>

```typescript
public readonly pipelineObject: DataAwsDatapipelinePipelineDefinitionPipelineObjectList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: IResolvable | DataAwsDatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatapipelinePipelineDefinitionConfig <a name="DataAwsDatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionConfig: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue">parameterValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]</code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```typescript
public readonly parameterValue: IResolvable | DataAwsDatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

### DataAwsDatapipelinePipelineDefinitionParameterObject <a name="DataAwsDatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionParameterObject: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject = { ... }
```


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionParameterObjectAttribute: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute = { ... }
```


### DataAwsDatapipelinePipelineDefinitionParameterValue <a name="DataAwsDatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionParameterValue: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue = { ... }
```


### DataAwsDatapipelinePipelineDefinitionPipelineObject <a name="DataAwsDatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionPipelineObject: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject = { ... }
```


### DataAwsDatapipelinePipelineDefinitionPipelineObjectField <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

const dataAwsDatapipelinePipelineDefinitionPipelineObjectField: dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```typescript
public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get"></a>

```typescript
public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDatapipelinePipelineDefinitionParameterObject;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterValueList <a name="DataAwsDatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get"></a>

```typescript
public get(index: number): DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsDatapipelinePipelineDefinitionParameterValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>[]

---


### DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDatapipelinePipelineDefinitionParameterValue | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a> | cdktf.IResolvable

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```typescript
public get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">refValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```typescript
public readonly refValue: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDatapipelinePipelineDefinitionPipelineObjectField;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a>

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```typescript
public get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```typescript
import { dataAwsDatapipelinePipelineDefinition } from '@cdktf/provider-aws'

new dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```typescript
public readonly field: DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDatapipelinePipelineDefinitionPipelineObject;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a>

---



