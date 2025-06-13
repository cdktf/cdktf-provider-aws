# `dataAwsIdentitystoreGroups` Submodule <a name="`dataAwsIdentitystoreGroups` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroups <a name="DataAwsIdentitystoreGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups aws_identitystore_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

new dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups(scope: Construct, id: string, config: DataAwsIdentitystoreGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig">DataAwsIdentitystoreGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig">DataAwsIdentitystoreGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsIdentitystoreGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsIdentitystoreGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups"></a>

```typescript
public readonly groups: DataAwsIdentitystoreGroupsGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput"></a>

```typescript
public readonly identityStoreIdInput: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupsConfig <a name="DataAwsIdentitystoreGroupsConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

const dataAwsIdentitystoreGroupsConfig: dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}.

---

### DataAwsIdentitystoreGroupsGroups <a name="DataAwsIdentitystoreGroupsGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

const dataAwsIdentitystoreGroupsGroups: dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups = { ... }
```


### DataAwsIdentitystoreGroupsGroupsExternalIds <a name="DataAwsIdentitystoreGroupsGroupsExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

const dataAwsIdentitystoreGroupsGroupsExternalIds: dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupsGroupsExternalIdsList <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

new dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

new dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreGroupsGroupsExternalIds;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a>

---


### DataAwsIdentitystoreGroupsGroupsList <a name="DataAwsIdentitystoreGroupsGroupsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

new dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get"></a>

```typescript
public get(index: number): DataAwsIdentitystoreGroupsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIdentitystoreGroupsGroupsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsIdentitystoreGroups } from '@cdktf/provider-aws'

new dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds"></a>

```typescript
public readonly externalIds: DataAwsIdentitystoreGroupsGroupsExternalIdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIdentitystoreGroupsGroups;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a>

---



