# `dataAwsFisExperimentTemplates` Submodule <a name="`dataAwsFisExperimentTemplates` Submodule" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFisExperimentTemplates <a name="DataAwsFisExperimentTemplates" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/fis_experiment_templates aws_fis_experiment_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

new dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates(scope: Construct, id: string, config?: DataAwsFisExperimentTemplatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig">DataAwsFisExperimentTemplatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig">DataAwsFisExperimentTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFisExperimentTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isConstruct"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformElement"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformDataSource"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsFisExperimentTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFisExperimentTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFisExperimentTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/fis_experiment_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFisExperimentTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFisExperimentTemplatesConfig <a name="DataAwsFisExperimentTemplatesConfig" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.Initializer"></a>

```typescript
import { dataAwsFisExperimentTemplates } from '@cdktf/provider-aws'

const dataAwsFisExperimentTemplatesConfig: dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/fis_experiment_templates#tags DataAwsFisExperimentTemplates#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFisExperimentTemplates.DataAwsFisExperimentTemplatesConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/data-sources/fis_experiment_templates#tags DataAwsFisExperimentTemplates#tags}.

---



