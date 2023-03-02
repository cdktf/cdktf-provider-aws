# `lakeformationResourceLfTags` Submodule <a name="`lakeformationResourceLfTags` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTags <a name="LakeformationResourceLfTags" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTags(scope: Construct, id: string, config: LakeformationResourceLfTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig">LakeformationResourceLfTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig">LakeformationResourceLfTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase"></a>

```typescript
public putDatabase(value: LakeformationResourceLfTagsDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag"></a>

```typescript
public putLfTag(value: IResolvable | LakeformationResourceLfTagsLfTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable"></a>

```typescript
public putTable(value: LakeformationResourceLfTagsTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: LakeformationResourceLfTagsTableWithColumns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts"></a>

```typescript
public putTimeouts(value: LakeformationResourceLfTagsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput">lfTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database"></a>

```typescript
public readonly database: LakeformationResourceLfTagsDatabaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag"></a>

```typescript
public readonly lfTag: LakeformationResourceLfTagsLfTagList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table"></a>

```typescript
public readonly table: LakeformationResourceLfTagsTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationResourceLfTagsTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationResourceLfTagsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput"></a>

```typescript
public readonly databaseInput: LakeformationResourceLfTagsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput"></a>

```typescript
public readonly lfTagInput: IResolvable | LakeformationResourceLfTagsLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput"></a>

```typescript
public readonly tableInput: LakeformationResourceLfTagsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: LakeformationResourceLfTagsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LakeformationResourceLfTagsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagsConfig <a name="LakeformationResourceLfTagsConfig" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsConfig: lakeformationResourceLfTags.LakeformationResourceLfTagsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag">lfTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag"></a>

```typescript
public readonly lfTag: IResolvable | LakeformationResourceLfTagsLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database"></a>

```typescript
public readonly database: LakeformationResourceLfTagsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table"></a>

```typescript
public readonly table: LakeformationResourceLfTagsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationResourceLfTagsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LakeformationResourceLfTagsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

### LakeformationResourceLfTagsDatabase <a name="LakeformationResourceLfTagsDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsDatabase: lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsLfTag <a name="LakeformationResourceLfTagsLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsLfTag: lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsTable <a name="LakeformationResourceLfTagsTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsTable: lakeformationResourceLfTags.LakeformationResourceLfTagsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTableWithColumns <a name="LakeformationResourceLfTagsTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsTableWithColumns: lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}.

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTimeouts <a name="LakeformationResourceLfTagsTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

const lakeformationResourceLfTagsTimeouts: lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagsDatabaseOutputReference <a name="LakeformationResourceLfTagsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakeformationResourceLfTagsDatabase;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---


### LakeformationResourceLfTagsLfTagList <a name="LakeformationResourceLfTagsLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get"></a>

```typescript
public get(index: number): LakeformationResourceLfTagsLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationResourceLfTagsLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>[]

---


### LakeformationResourceLfTagsLfTagOutputReference <a name="LakeformationResourceLfTagsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakeformationResourceLfTagsLfTag | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a> | cdktf.IResolvable

---


### LakeformationResourceLfTagsTableOutputReference <a name="LakeformationResourceLfTagsTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakeformationResourceLfTagsTable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---


### LakeformationResourceLfTagsTableWithColumnsOutputReference <a name="LakeformationResourceLfTagsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakeformationResourceLfTagsTableWithColumns;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---


### LakeformationResourceLfTagsTimeoutsOutputReference <a name="LakeformationResourceLfTagsTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer"></a>

```typescript
import { lakeformationResourceLfTags } from '@cdktf/provider-aws'

new lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakeformationResourceLfTagsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> | cdktf.IResolvable

---



