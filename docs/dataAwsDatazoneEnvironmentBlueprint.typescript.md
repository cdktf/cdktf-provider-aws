# `dataAwsDatazoneEnvironmentBlueprint` Submodule <a name="`dataAwsDatazoneEnvironmentBlueprint` Submodule" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatazoneEnvironmentBlueprint <a name="DataAwsDatazoneEnvironmentBlueprint" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

new dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint(scope: Construct, id: string, config: DataAwsDatazoneEnvironmentBlueprintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig">DataAwsDatazoneEnvironmentBlueprintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig">DataAwsDatazoneEnvironmentBlueprintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDatazoneEnvironmentBlueprint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDatazoneEnvironmentBlueprint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDatazoneEnvironmentBlueprint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider">blueprintProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blueprintProvider`<sup>Required</sup> <a name="blueprintProvider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider"></a>

```typescript
public readonly blueprintProvider: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatazoneEnvironmentBlueprintConfig <a name="DataAwsDatazoneEnvironmentBlueprintConfig" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.Initializer"></a>

```typescript
import { dataAwsDatazoneEnvironmentBlueprint } from '@cdktf/provider-aws'

const dataAwsDatazoneEnvironmentBlueprintConfig: dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}.

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}.

---



