# `dataAwsLakeformationDataLakeSettings` Submodule <a name="`dataAwsLakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationDataLakeSettings <a name="DataAwsLakeformationDataLakeSettings" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings(scope: Construct, id: string, config?: DataAwsLakeformationDataLakeSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins">admins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `trustedResourceOwners`<sup>Required</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```typescript
public readonly trustedResourceOwners: string[];
```

- *Type:* string[]

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationDataLakeSettingsConfig <a name="DataAwsLakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

const dataAwsLakeformationDataLakeSettingsConfig: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

const dataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = { ... }
```


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

const dataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/provider-aws'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a>

---



