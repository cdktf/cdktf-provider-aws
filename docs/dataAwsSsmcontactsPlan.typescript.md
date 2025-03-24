# `dataAwsSsmcontactsPlan` Submodule <a name="`dataAwsSsmcontactsPlan` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsPlan <a name="DataAwsSsmcontactsPlan" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan aws_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan(scope: Construct, id: string, config: DataAwsSsmcontactsPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig">DataAwsSsmcontactsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig">DataAwsSsmcontactsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmcontactsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsmcontactsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmcontactsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList">DataAwsSsmcontactsPlanStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactIdInput">contactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactId">contactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.stage"></a>

```typescript
public readonly stage: DataAwsSsmcontactsPlanStageList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList">DataAwsSsmcontactsPlanStageList</a>

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactIdInput"></a>

```typescript
public readonly contactIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsPlanConfig <a name="DataAwsSsmcontactsPlanConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

const dataAwsSsmcontactsPlanConfig: dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.contactId">contactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSsmcontactsPlanStage <a name="DataAwsSsmcontactsPlanStage" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

const dataAwsSsmcontactsPlanStage: dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage = { ... }
```


### DataAwsSsmcontactsPlanStageTarget <a name="DataAwsSsmcontactsPlanStageTarget" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

const dataAwsSsmcontactsPlanStageTarget: dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget = { ... }
```


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfo <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

const dataAwsSsmcontactsPlanStageTargetChannelTargetInfo: dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo = { ... }
```


### DataAwsSsmcontactsPlanStageTargetContactTargetInfo <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

const dataAwsSsmcontactsPlanStageTargetContactTargetInfo: dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsPlanStageList <a name="DataAwsSsmcontactsPlanStageList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get"></a>

```typescript
public get(index: number): DataAwsSsmcontactsPlanStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmcontactsPlanStageOutputReference <a name="DataAwsSsmcontactsPlanStageOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList">DataAwsSsmcontactsPlanStageTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage">DataAwsSsmcontactsPlanStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.target"></a>

```typescript
public readonly target: DataAwsSsmcontactsPlanStageTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList">DataAwsSsmcontactsPlanStageTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmcontactsPlanStage;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage">DataAwsSsmcontactsPlanStage</a>

---


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get"></a>

```typescript
public get(index: number): DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId">contactChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo">DataAwsSsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactChannelId`<sup>Required</sup> <a name="contactChannelId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId"></a>

```typescript
public readonly contactChannelId: string;
```

- *Type:* string

---

##### `retryIntervalInMinutes`<sup>Required</sup> <a name="retryIntervalInMinutes" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```typescript
public readonly retryIntervalInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmcontactsPlanStageTargetChannelTargetInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo">DataAwsSsmcontactsPlanStageTargetChannelTargetInfo</a>

---


### DataAwsSsmcontactsPlanStageTargetContactTargetInfoList <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfoList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get"></a>

```typescript
public get(index: number): DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId">contactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential">isEssential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo">DataAwsSsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

---

##### `isEssential`<sup>Required</sup> <a name="isEssential" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential"></a>

```typescript
public readonly isEssential: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmcontactsPlanStageTargetContactTargetInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo">DataAwsSsmcontactsPlanStageTargetContactTargetInfo</a>

---


### DataAwsSsmcontactsPlanStageTargetList <a name="DataAwsSsmcontactsPlanStageTargetList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get"></a>

```typescript
public get(index: number): DataAwsSsmcontactsPlanStageTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSsmcontactsPlanStageTargetOutputReference <a name="DataAwsSsmcontactsPlanStageTargetOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsSsmcontactsPlan } from '@cdktf/provider-aws'

new dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList">DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList">DataAwsSsmcontactsPlanStageTargetContactTargetInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget">DataAwsSsmcontactsPlanStageTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelTargetInfo`<sup>Required</sup> <a name="channelTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo"></a>

```typescript
public readonly channelTargetInfo: DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList">DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList</a>

---

##### `contactTargetInfo`<sup>Required</sup> <a name="contactTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo"></a>

```typescript
public readonly contactTargetInfo: DataAwsSsmcontactsPlanStageTargetContactTargetInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList">DataAwsSsmcontactsPlanStageTargetContactTargetInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSsmcontactsPlanStageTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget">DataAwsSsmcontactsPlanStageTarget</a>

---



