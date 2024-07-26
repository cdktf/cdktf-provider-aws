# `dataAwsQuicksightTheme` Submodule <a name="`dataAwsQuicksightTheme` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightTheme <a name="DataAwsQuicksightTheme" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme aws_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightTheme(scope: Construct, id: string, config: DataAwsQuicksightThemeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig">DataAwsQuicksightThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig">DataAwsQuicksightThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsQuicksightTheme resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsQuicksightTheme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsQuicksightTheme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsQuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsQuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.baseThemeId">baseThemeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList">DataAwsQuicksightThemeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList">DataAwsQuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeIdInput">themeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeId">themeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `baseThemeId`<sup>Required</sup> <a name="baseThemeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.baseThemeId"></a>

```typescript
public readonly baseThemeId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.configuration"></a>

```typescript
public readonly configuration: DataAwsQuicksightThemeConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList">DataAwsQuicksightThemeConfigurationList</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.permissions"></a>

```typescript
public readonly permissions: DataAwsQuicksightThemePermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList">DataAwsQuicksightThemePermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `themeIdInput`<sup>Optional</sup> <a name="themeIdInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeIdInput"></a>

```typescript
public readonly themeIdInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightThemeConfig <a name="DataAwsQuicksightThemeConfig" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfig: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.themeId">themeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#theme_id DataAwsQuicksightTheme#theme_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#aws_account_id DataAwsQuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#id DataAwsQuicksightTheme#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#tags DataAwsQuicksightTheme#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#theme_id DataAwsQuicksightTheme#theme_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#aws_account_id DataAwsQuicksightTheme#aws_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#id DataAwsQuicksightTheme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/data-sources/quicksight_theme#tags DataAwsQuicksightTheme#tags}.

---

### DataAwsQuicksightThemeConfiguration <a name="DataAwsQuicksightThemeConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfiguration: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration = { ... }
```


### DataAwsQuicksightThemeConfigurationDataColorPalette <a name="DataAwsQuicksightThemeConfigurationDataColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationDataColorPalette: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette = { ... }
```


### DataAwsQuicksightThemeConfigurationSheet <a name="DataAwsQuicksightThemeConfigurationSheet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheet: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet = { ... }
```


### DataAwsQuicksightThemeConfigurationSheetTile <a name="DataAwsQuicksightThemeConfigurationSheetTile" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheetTile: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile = { ... }
```


### DataAwsQuicksightThemeConfigurationSheetTileBorder <a name="DataAwsQuicksightThemeConfigurationSheetTileBorder" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheetTileBorder: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder = { ... }
```


### DataAwsQuicksightThemeConfigurationSheetTileLayout <a name="DataAwsQuicksightThemeConfigurationSheetTileLayout" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheetTileLayout: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout = { ... }
```


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheetTileLayoutGutter: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter = { ... }
```


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationSheetTileLayoutMargin: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin = { ... }
```


### DataAwsQuicksightThemeConfigurationTypography <a name="DataAwsQuicksightThemeConfigurationTypography" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationTypography: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography = { ... }
```


### DataAwsQuicksightThemeConfigurationTypographyFontFamilies <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamilies" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationTypographyFontFamilies: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies = { ... }
```


### DataAwsQuicksightThemeConfigurationUiColorPalette <a name="DataAwsQuicksightThemeConfigurationUiColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemeConfigurationUiColorPalette: dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette = { ... }
```


### DataAwsQuicksightThemePermissions <a name="DataAwsQuicksightThemePermissions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

const dataAwsQuicksightThemePermissions: dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightThemeConfigurationDataColorPaletteList <a name="DataAwsQuicksightThemeConfigurationDataColorPaletteList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference <a name="DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">emptyFillColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">minMaxGradient</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette">DataAwsQuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```typescript
public readonly colors: string[];
```

- *Type:* string[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="emptyFillColor" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```typescript
public readonly emptyFillColor: string;
```

- *Type:* string

---

##### `minMaxGradient`<sup>Required</sup> <a name="minMaxGradient" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```typescript
public readonly minMaxGradient: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationDataColorPalette;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette">DataAwsQuicksightThemeConfigurationDataColorPalette</a>

---


### DataAwsQuicksightThemeConfigurationList <a name="DataAwsQuicksightThemeConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationOutputReference <a name="DataAwsQuicksightThemeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.dataColorPalette">dataColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList">DataAwsQuicksightThemeConfigurationDataColorPaletteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList">DataAwsQuicksightThemeConfigurationSheetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList">DataAwsQuicksightThemeConfigurationTypographyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.uiColorPalette">uiColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList">DataAwsQuicksightThemeConfigurationUiColorPaletteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration">DataAwsQuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataColorPalette`<sup>Required</sup> <a name="dataColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```typescript
public readonly dataColorPalette: DataAwsQuicksightThemeConfigurationDataColorPaletteList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList">DataAwsQuicksightThemeConfigurationDataColorPaletteList</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.sheet"></a>

```typescript
public readonly sheet: DataAwsQuicksightThemeConfigurationSheetList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList">DataAwsQuicksightThemeConfigurationSheetList</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.typography"></a>

```typescript
public readonly typography: DataAwsQuicksightThemeConfigurationTypographyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList">DataAwsQuicksightThemeConfigurationTypographyList</a>

---

##### `uiColorPalette`<sup>Required</sup> <a name="uiColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```typescript
public readonly uiColorPalette: DataAwsQuicksightThemeConfigurationUiColorPaletteList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList">DataAwsQuicksightThemeConfigurationUiColorPaletteList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration">DataAwsQuicksightThemeConfiguration</a>

---


### DataAwsQuicksightThemeConfigurationSheetList <a name="DataAwsQuicksightThemeConfigurationSheetList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList">DataAwsQuicksightThemeConfigurationSheetTileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tileLayout</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList">DataAwsQuicksightThemeConfigurationSheetTileLayoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet">DataAwsQuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```typescript
public readonly tile: DataAwsQuicksightThemeConfigurationSheetTileList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList">DataAwsQuicksightThemeConfigurationSheetTileList</a>

---

##### `tileLayout`<sup>Required</sup> <a name="tileLayout" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```typescript
public readonly tileLayout: DataAwsQuicksightThemeConfigurationSheetTileLayoutList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList">DataAwsQuicksightThemeConfigurationSheetTileLayoutList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheet;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet">DataAwsQuicksightThemeConfigurationSheet</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileBorderList <a name="DataAwsQuicksightThemeConfigurationSheetTileBorderList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder">DataAwsQuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheetTileBorder;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder">DataAwsQuicksightThemeConfigurationSheetTileBorder</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```typescript
public readonly show: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList">DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout">DataAwsQuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```typescript
public readonly gutter: DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```typescript
public readonly margin: DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList">DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheetTileLayout;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout">DataAwsQuicksightThemeConfigurationSheetTileLayout</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileList <a name="DataAwsQuicksightThemeConfigurationSheetTileList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationSheetTileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationSheetTileOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList">DataAwsQuicksightThemeConfigurationSheetTileBorderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile">DataAwsQuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```typescript
public readonly border: DataAwsQuicksightThemeConfigurationSheetTileBorderList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList">DataAwsQuicksightThemeConfigurationSheetTileBorderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationSheetTile;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile">DataAwsQuicksightThemeConfigurationSheetTile</a>

---


### DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies">DataAwsQuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationTypographyFontFamilies;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies">DataAwsQuicksightThemeConfigurationTypographyFontFamilies</a>

---


### DataAwsQuicksightThemeConfigurationTypographyList <a name="DataAwsQuicksightThemeConfigurationTypographyList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationTypographyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationTypographyOutputReference <a name="DataAwsQuicksightThemeConfigurationTypographyOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">fontFamilies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography">DataAwsQuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilies`<sup>Required</sup> <a name="fontFamilies" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```typescript
public readonly fontFamilies: DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationTypography;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography">DataAwsQuicksightThemeConfigurationTypography</a>

---


### DataAwsQuicksightThemeConfigurationUiColorPaletteList <a name="DataAwsQuicksightThemeConfigurationUiColorPaletteList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference <a name="DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accentForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">dangerForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimensionForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measureForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondaryBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondaryForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">successForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warningForeground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette">DataAwsQuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```typescript
public readonly accent: string;
```

- *Type:* string

---

##### `accentForeground`<sup>Required</sup> <a name="accentForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```typescript
public readonly accentForeground: string;
```

- *Type:* string

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```typescript
public readonly danger: string;
```

- *Type:* string

---

##### `dangerForeground`<sup>Required</sup> <a name="dangerForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```typescript
public readonly dangerForeground: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `dimensionForeground`<sup>Required</sup> <a name="dimensionForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```typescript
public readonly dimensionForeground: string;
```

- *Type:* string

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```typescript
public readonly measure: string;
```

- *Type:* string

---

##### `measureForeground`<sup>Required</sup> <a name="measureForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```typescript
public readonly measureForeground: string;
```

- *Type:* string

---

##### `primaryBackground`<sup>Required</sup> <a name="primaryBackground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```typescript
public readonly primaryBackground: string;
```

- *Type:* string

---

##### `primaryForeground`<sup>Required</sup> <a name="primaryForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```typescript
public readonly primaryForeground: string;
```

- *Type:* string

---

##### `secondaryBackground`<sup>Required</sup> <a name="secondaryBackground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```typescript
public readonly secondaryBackground: string;
```

- *Type:* string

---

##### `secondaryForeground`<sup>Required</sup> <a name="secondaryForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```typescript
public readonly secondaryForeground: string;
```

- *Type:* string

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```typescript
public readonly success: string;
```

- *Type:* string

---

##### `successForeground`<sup>Required</sup> <a name="successForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```typescript
public readonly successForeground: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningForeground`<sup>Required</sup> <a name="warningForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```typescript
public readonly warningForeground: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemeConfigurationUiColorPalette;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette">DataAwsQuicksightThemeConfigurationUiColorPalette</a>

---


### DataAwsQuicksightThemePermissionsList <a name="DataAwsQuicksightThemePermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightThemePermissionsOutputReference <a name="DataAwsQuicksightThemePermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightTheme } from '@cdktf/provider-aws'

new dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions">DataAwsQuicksightThemePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightThemePermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions">DataAwsQuicksightThemePermissions</a>

---



