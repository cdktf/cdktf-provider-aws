# `glueCatalogTable` Submodule <a name="`glueCatalogTable` Submodule" id="@cdktf/provider-aws.glueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTable <a name="GlueCatalogTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTable(scope: Construct, id: string, config: GlueCatalogTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput">putOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex">putPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys">putPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOpenTableFormatInput">resetOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys">resetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType">resetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable">resetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOpenTableFormatInput` <a name="putOpenTableFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput"></a>

```typescript
public putOpenTableFormatInput(value: GlueCatalogTableOpenTableFormatInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---

##### `putPartitionIndex` <a name="putPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex"></a>

```typescript
public putPartitionIndex(value: IResolvable | GlueCatalogTablePartitionIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---

##### `putPartitionKeys` <a name="putPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys"></a>

```typescript
public putPartitionKeys(value: IResolvable | GlueCatalogTablePartitionKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: GlueCatalogTableStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `putTargetTable` <a name="putTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable"></a>

```typescript
public putTargetTable(value: GlueCatalogTableTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenTableFormatInput` <a name="resetOpenTableFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOpenTableFormatInput"></a>

```typescript
public resetOpenTableFormatInput(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex"></a>

```typescript
public resetPartitionIndex(): void
```

##### `resetPartitionKeys` <a name="resetPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys"></a>

```typescript
public resetPartitionKeys(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor"></a>

```typescript
public resetStorageDescriptor(): void
```

##### `resetTableType` <a name="resetTableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType"></a>

```typescript
public resetTableType(): void
```

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText"></a>

```typescript
public resetViewExpandedText(): void
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText"></a>

```typescript
public resetViewOriginalText(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlueCatalogTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

glueCatalogTable.GlueCatalogTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

glueCatalogTable.GlueCatalogTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

glueCatalogTable.GlueCatalogTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

glueCatalogTable.GlueCatalogTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlueCatalogTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCatalogTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCatalogTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueCatalogTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference">GlueCatalogTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex">partitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys">partitionKeys</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable">targetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInputInput">openTableFormatInputInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput">partitionIndexInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput">partitionKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput">retentionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput">tableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput">targetTableInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention">retention</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `openTableFormatInput`<sup>Required</sup> <a name="openTableFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInput"></a>

```typescript
public readonly openTableFormatInput: GlueCatalogTableOpenTableFormatInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference">GlueCatalogTableOpenTableFormatInputOutputReference</a>

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: GlueCatalogTablePartitionIndexList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a>

---

##### `partitionKeys`<sup>Required</sup> <a name="partitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: GlueCatalogTablePartitionKeysList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a>

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GlueCatalogTableStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable"></a>

```typescript
public readonly targetTable: GlueCatalogTableTargetTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openTableFormatInputInput`<sup>Optional</sup> <a name="openTableFormatInputInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInputInput"></a>

```typescript
public readonly openTableFormatInputInput: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput"></a>

```typescript
public readonly partitionIndexInput: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---

##### `partitionKeysInput`<sup>Optional</sup> <a name="partitionKeysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput"></a>

```typescript
public readonly partitionKeysInput: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput"></a>

```typescript
public readonly retentionInput: number;
```

- *Type:* number

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput"></a>

```typescript
public readonly tableTypeInput: string;
```

- *Type:* string

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput"></a>

```typescript
public readonly viewExpandedTextInput: string;
```

- *Type:* string

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput"></a>

```typescript
public readonly viewOriginalTextInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableConfig <a name="GlueCatalogTableConfig" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableConfig: glueCatalogTable.GlueCatalogTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | open_table_format_input block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex">partitionIndex</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys">partitionKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | partition_keys block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention">retention</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType">tableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable">targetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openTableFormatInput`<sup>Optional</sup> <a name="openTableFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.openTableFormatInput"></a>

```typescript
public readonly openTableFormatInput: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

open_table_format_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#open_table_format_input GlueCatalogTable#open_table_format_input}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

partition_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable"></a>

```typescript
public readonly targetTable: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

### GlueCatalogTableOpenTableFormatInput <a name="GlueCatalogTableOpenTableFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableOpenTableFormatInput: glueCatalogTable.GlueCatalogTableOpenTableFormatInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | iceberg_input block. |

---

##### `icebergInput`<sup>Required</sup> <a name="icebergInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.property.icebergInput"></a>

```typescript
public readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

iceberg_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#iceberg_input GlueCatalogTable#iceberg_input}

---

### GlueCatalogTableOpenTableFormatInputIcebergInput <a name="GlueCatalogTableOpenTableFormatInputIcebergInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInput: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.metadataOperation">metadataOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}. |

---

##### `metadataOperation`<sup>Required</sup> <a name="metadataOperation" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.metadataOperation"></a>

```typescript
public readonly metadataOperation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}.

---

### GlueCatalogTablePartitionIndex <a name="GlueCatalogTablePartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTablePartitionIndex: glueCatalogTable.GlueCatalogTablePartitionIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys">keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}.

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}.

---

### GlueCatalogTablePartitionKeys <a name="GlueCatalogTablePartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTablePartitionKeys: glueCatalogTable.GlueCatalogTablePartitionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptor <a name="GlueCatalogTableStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptor: glueCatalogTable.GlueCatalogTableStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.additionalLocations">additionalLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns">columns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed">compressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | schema_reference block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo">serDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns">sortColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | sort_columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}. |

---

##### `additionalLocations`<sup>Optional</sup> <a name="additionalLocations" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.additionalLocations"></a>

```typescript
public readonly additionalLocations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}.

---

##### `bucketColumns`<sup>Optional</sup> <a name="bucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns"></a>

```typescript
public readonly columns: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#columns GlueCatalogTable#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="numberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `schemaReference`<sup>Optional</sup> <a name="schemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference"></a>

```typescript
public readonly schemaReference: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

##### `serDeInfo`<sup>Optional</sup> <a name="serDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo"></a>

```typescript
public readonly serDeInfo: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

##### `sortColumns`<sup>Optional</sup> <a name="sortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns"></a>

```typescript
public readonly sortColumns: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

sort_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="storedAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

### GlueCatalogTableStorageDescriptorColumns <a name="GlueCatalogTableStorageDescriptorColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorColumns: glueCatalogTable.GlueCatalogTableStorageDescriptorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptorSchemaReference <a name="GlueCatalogTableStorageDescriptorSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorSchemaReference: glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | schema_id block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}. |

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId"></a>

```typescript
public readonly schemaId: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

##### `schemaVersionId`<sup>Optional</sup> <a name="schemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorSchemaReferenceSchemaId: glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName">registryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schemaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}. |

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

### GlueCatalogTableStorageDescriptorSerDeInfo <a name="GlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorSerDeInfo: glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `serializationLibrary`<sup>Optional</sup> <a name="serializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

### GlueCatalogTableStorageDescriptorSkewedInfo <a name="GlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorSkewedInfo: glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}. |

---

##### `skewedColumnNames`<sup>Optional</sup> <a name="skewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="skewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="skewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

### GlueCatalogTableStorageDescriptorSortColumns <a name="GlueCatalogTableStorageDescriptorSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableStorageDescriptorSortColumns: glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder">sortOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}.

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}.

---

### GlueCatalogTableTargetTable <a name="GlueCatalogTableTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

const glueCatalogTableTargetTable: glueCatalogTable.GlueCatalogTableTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput">metadataOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">metadataOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataOperationInput`<sup>Optional</sup> <a name="metadataOperationInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput"></a>

```typescript
public readonly metadataOperationInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `metadataOperation`<sup>Required</sup> <a name="metadataOperation" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```typescript
public readonly metadataOperation: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---


### GlueCatalogTableOpenTableFormatInputOutputReference <a name="GlueCatalogTableOpenTableFormatInputOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput">putIcebergInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergInput` <a name="putIcebergInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput"></a>

```typescript
public putIcebergInput(value: GlueCatalogTableOpenTableFormatInputIcebergInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInputInput">icebergInputInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergInput`<sup>Required</sup> <a name="icebergInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```typescript
public readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `icebergInputInput`<sup>Optional</sup> <a name="icebergInputInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInputInput"></a>

```typescript
public readonly icebergInputInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---


### GlueCatalogTablePartitionIndexList <a name="GlueCatalogTablePartitionIndexList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get"></a>

```typescript
public get(index: number): GlueCatalogTablePartitionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---


### GlueCatalogTablePartitionIndexOutputReference <a name="GlueCatalogTablePartitionIndexOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus">indexStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexStatus`<sup>Required</sup> <a name="indexStatus" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```typescript
public readonly indexStatus: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionIndex;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>

---


### GlueCatalogTablePartitionKeysList <a name="GlueCatalogTablePartitionKeysList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get"></a>

```typescript
public get(index: number): GlueCatalogTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---


### GlueCatalogTablePartitionKeysOutputReference <a name="GlueCatalogTablePartitionKeysOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>

---


### GlueCatalogTableStorageDescriptorColumnsList <a name="GlueCatalogTableStorageDescriptorColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---


### GlueCatalogTableStorageDescriptorColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>

---


### GlueCatalogTableStorageDescriptorOutputReference <a name="GlueCatalogTableStorageDescriptorOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference">putSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo">putSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns">putSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetAdditionalLocations">resetAdditionalLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns">resetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets">resetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference">resetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo">resetSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns">resetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories">resetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | GlueCatalogTableStorageDescriptorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---

##### `putSchemaReference` <a name="putSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference"></a>

```typescript
public putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `putSerDeInfo` <a name="putSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo"></a>

```typescript
public putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```typescript
public putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `putSortColumns` <a name="putSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns"></a>

```typescript
public putSortColumns(value: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---

##### `resetAdditionalLocations` <a name="resetAdditionalLocations" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetAdditionalLocations"></a>

```typescript
public resetAdditionalLocations(): void
```

##### `resetBucketColumns` <a name="resetBucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns"></a>

```typescript
public resetBucketColumns(): void
```

##### `resetColumns` <a name="resetColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed"></a>

```typescript
public resetCompressed(): void
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNumberOfBuckets` <a name="resetNumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```typescript
public resetNumberOfBuckets(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaReference` <a name="resetSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference"></a>

```typescript
public resetSchemaReference(): void
```

##### `resetSerDeInfo` <a name="resetSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo"></a>

```typescript
public resetSerDeInfo(): void
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```typescript
public resetSkewedInfo(): void
```

##### `resetSortColumns` <a name="resetSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns"></a>

```typescript
public resetSortColumns(): void
```

##### `resetStoredAsSubDirectories` <a name="resetStoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```typescript
public resetStoredAsSubDirectories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">serDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocationsInput">additionalLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput">bucketColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput">numberOfBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput">schemaReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput">serDeInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput">sortColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">storedAsSubDirectoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocations">additionalLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```typescript
public readonly columns: GlueCatalogTableStorageDescriptorColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```typescript
public readonly schemaReference: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serDeInfo`<sup>Required</sup> <a name="serDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```typescript
public readonly serDeInfo: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```typescript
public readonly sortColumns: GlueCatalogTableStorageDescriptorSortColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `additionalLocationsInput`<sup>Optional</sup> <a name="additionalLocationsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocationsInput"></a>

```typescript
public readonly additionalLocationsInput: string[];
```

- *Type:* string[]

---

##### `bucketColumnsInput`<sup>Optional</sup> <a name="bucketColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```typescript
public readonly bucketColumnsInput: string[];
```

- *Type:* string[]

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput"></a>

```typescript
public readonly compressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `numberOfBucketsInput`<sup>Optional</sup> <a name="numberOfBucketsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```typescript
public readonly numberOfBucketsInput: number;
```

- *Type:* number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaReferenceInput`<sup>Optional</sup> <a name="schemaReferenceInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```typescript
public readonly schemaReferenceInput: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `serDeInfoInput`<sup>Optional</sup> <a name="serDeInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```typescript
public readonly serDeInfoInput: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```typescript
public readonly skewedInfoInput: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `sortColumnsInput`<sup>Optional</sup> <a name="sortColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```typescript
public readonly sortColumnsInput: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---

##### `storedAsSubDirectoriesInput`<sup>Optional</sup> <a name="storedAsSubDirectoriesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```typescript
public readonly storedAsSubDirectoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalLocations`<sup>Required</sup> <a name="additionalLocations" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocations"></a>

```typescript
public readonly additionalLocations: string[];
```

- *Type:* string[]

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId">putSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">resetSchemaVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaId` <a name="putSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```typescript
public putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetSchemaVersionId` <a name="resetSchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```typescript
public resetSchemaVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schemaVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schemaVersionIdInput`<sup>Optional</sup> <a name="schemaVersionIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```typescript
public readonly schemaVersionIdInput: string;
```

- *Type:* string

---

##### `schemaVersionNumberInput`<sup>Optional</sup> <a name="schemaVersionNumberInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```typescript
public readonly schemaVersionNumberInput: number;
```

- *Type:* number

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```typescript
public resetSchemaArn(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">resetSerializationLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSerializationLibrary` <a name="resetSerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```typescript
public resetSerializationLibrary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">serializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serializationLibraryInput`<sup>Optional</sup> <a name="serializationLibraryInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```typescript
public readonly serializationLibraryInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### GlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">resetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">resetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">resetSkewedColumnValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkewedColumnNames` <a name="resetSkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```typescript
public resetSkewedColumnNames(): void
```

##### `resetSkewedColumnValueLocationMaps` <a name="resetSkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```typescript
public resetSkewedColumnValueLocationMaps(): void
```

##### `resetSkewedColumnValues` <a name="resetSkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```typescript
public resetSkewedColumnValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewedColumnValueLocationMapsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewedColumnValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skewedColumnNamesInput`<sup>Optional</sup> <a name="skewedColumnNamesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```typescript
public readonly skewedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="skewedColumnValueLocationMapsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```typescript
public readonly skewedColumnValueLocationMapsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skewedColumnValuesInput`<sup>Optional</sup> <a name="skewedColumnValuesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```typescript
public readonly skewedColumnValuesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### GlueCatalogTableStorageDescriptorSortColumnsList <a name="GlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---


### GlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorSortColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>

---


### GlueCatalogTableTargetTableOutputReference <a name="GlueCatalogTableTargetTableOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktf/provider-aws'

new glueCatalogTable.GlueCatalogTableTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---



