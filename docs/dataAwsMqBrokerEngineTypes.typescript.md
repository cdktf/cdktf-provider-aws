# `dataAwsMqBrokerEngineTypes` Submodule <a name="`dataAwsMqBrokerEngineTypes` Submodule" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMqBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types aws_mq_broker_engine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

new dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes(scope: Construct, id: string, config?: DataAwsMqBrokerEngineTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig">DataAwsMqBrokerEngineTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig">DataAwsMqBrokerEngineTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType">resetEngineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEngineType` <a name="resetEngineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType"></a>

```typescript
public resetEngineType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMqBrokerEngineTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMqBrokerEngineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMqBrokerEngineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes">brokerEngineTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput">engineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `brokerEngineTypes`<sup>Required</sup> <a name="brokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes"></a>

```typescript
public readonly brokerEngineTypes: DataAwsMqBrokerEngineTypesBrokerEngineTypesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a>

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput"></a>

```typescript
public readonly engineTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

const dataAwsMqBrokerEngineTypesBrokerEngineTypes: dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes = { ... }
```


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

const dataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions: dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions = { ... }
```


### DataAwsMqBrokerEngineTypesConfig <a name="DataAwsMqBrokerEngineTypesConfig" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

const dataAwsMqBrokerEngineTypesConfig: dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType">engineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engineType`<sup>Optional</sup> <a name="engineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

new dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get"></a>

```typescript
public get(index: number): DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

new dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a>

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

new dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get"></a>

```typescript
public get(index: number): DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsMqBrokerEngineTypes } from '@cdktf/provider-aws'

new dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions">engineVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `engineVersions`<sup>Required</sup> <a name="engineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions"></a>

```typescript
public readonly engineVersions: DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsMqBrokerEngineTypesBrokerEngineTypes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a>

---



