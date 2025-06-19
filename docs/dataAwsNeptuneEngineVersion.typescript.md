# `dataAwsNeptuneEngineVersion` Submodule <a name="`dataAwsNeptuneEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneEngineVersion <a name="DataAwsNeptuneEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version aws_neptune_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

new dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion(scope: Construct, id: string, config?: DataAwsNeptuneEngineVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly">resetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget">resetHasMajorTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget">resetHasMinorTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest">resetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily">resetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets">resetPreferredMajorTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets">resetPreferredUpgradeTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions">resetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultOnly` <a name="resetDefaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly"></a>

```typescript
public resetDefaultOnly(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetHasMajorTarget` <a name="resetHasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget"></a>

```typescript
public resetHasMajorTarget(): void
```

##### `resetHasMinorTarget` <a name="resetHasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget"></a>

```typescript
public resetHasMinorTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLatest` <a name="resetLatest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest"></a>

```typescript
public resetLatest(): void
```

##### `resetParameterGroupFamily` <a name="resetParameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily"></a>

```typescript
public resetParameterGroupFamily(): void
```

##### `resetPreferredMajorTargets` <a name="resetPreferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets"></a>

```typescript
public resetPreferredMajorTargets(): void
```

##### `resetPreferredUpgradeTargets` <a name="resetPreferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets"></a>

```typescript
public resetPreferredUpgradeTargets(): void
```

##### `resetPreferredVersions` <a name="resetPreferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions"></a>

```typescript
public resetPreferredVersions(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNeptuneEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNeptuneEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNeptuneEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet">defaultCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription">engineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes">exportableLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets">supportedCharacterSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones">supportedTimezones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch">supportsLogExportsToCloudwatch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica">supportsReadReplica</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets">validMajorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets">validMinorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets">validUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual">versionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput">defaultOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput">hasMajorTargetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput">hasMinorTargetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput">latestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput">parameterGroupFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput">preferredMajorTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput">preferredUpgradeTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput">preferredVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly">defaultOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget">hasMajorTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget">hasMinorTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest">latest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily">parameterGroupFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets">preferredMajorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets">preferredUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions">preferredVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultCharacterSet`<sup>Required</sup> <a name="defaultCharacterSet" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet"></a>

```typescript
public readonly defaultCharacterSet: string;
```

- *Type:* string

---

##### `engineDescription`<sup>Required</sup> <a name="engineDescription" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription"></a>

```typescript
public readonly engineDescription: string;
```

- *Type:* string

---

##### `exportableLogTypes`<sup>Required</sup> <a name="exportableLogTypes" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes"></a>

```typescript
public readonly exportableLogTypes: string[];
```

- *Type:* string[]

---

##### `supportedCharacterSets`<sup>Required</sup> <a name="supportedCharacterSets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets"></a>

```typescript
public readonly supportedCharacterSets: string[];
```

- *Type:* string[]

---

##### `supportedTimezones`<sup>Required</sup> <a name="supportedTimezones" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones"></a>

```typescript
public readonly supportedTimezones: string[];
```

- *Type:* string[]

---

##### `supportsGlobalDatabases`<sup>Required</sup> <a name="supportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases"></a>

```typescript
public readonly supportsGlobalDatabases: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsLogExportsToCloudwatch`<sup>Required</sup> <a name="supportsLogExportsToCloudwatch" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```typescript
public readonly supportsLogExportsToCloudwatch: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsReadReplica`<sup>Required</sup> <a name="supportsReadReplica" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica"></a>

```typescript
public readonly supportsReadReplica: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `validMajorTargets`<sup>Required</sup> <a name="validMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets"></a>

```typescript
public readonly validMajorTargets: string[];
```

- *Type:* string[]

---

##### `validMinorTargets`<sup>Required</sup> <a name="validMinorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets"></a>

```typescript
public readonly validMinorTargets: string[];
```

- *Type:* string[]

---

##### `validUpgradeTargets`<sup>Required</sup> <a name="validUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets"></a>

```typescript
public readonly validUpgradeTargets: string[];
```

- *Type:* string[]

---

##### `versionActual`<sup>Required</sup> <a name="versionActual" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual"></a>

```typescript
public readonly versionActual: string;
```

- *Type:* string

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `defaultOnlyInput`<sup>Optional</sup> <a name="defaultOnlyInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput"></a>

```typescript
public readonly defaultOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `hasMajorTargetInput`<sup>Optional</sup> <a name="hasMajorTargetInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput"></a>

```typescript
public readonly hasMajorTargetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasMinorTargetInput`<sup>Optional</sup> <a name="hasMinorTargetInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput"></a>

```typescript
public readonly hasMinorTargetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `latestInput`<sup>Optional</sup> <a name="latestInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput"></a>

```typescript
public readonly latestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parameterGroupFamilyInput`<sup>Optional</sup> <a name="parameterGroupFamilyInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput"></a>

```typescript
public readonly parameterGroupFamilyInput: string;
```

- *Type:* string

---

##### `preferredMajorTargetsInput`<sup>Optional</sup> <a name="preferredMajorTargetsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput"></a>

```typescript
public readonly preferredMajorTargetsInput: string[];
```

- *Type:* string[]

---

##### `preferredUpgradeTargetsInput`<sup>Optional</sup> <a name="preferredUpgradeTargetsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput"></a>

```typescript
public readonly preferredUpgradeTargetsInput: string[];
```

- *Type:* string[]

---

##### `preferredVersionsInput`<sup>Optional</sup> <a name="preferredVersionsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput"></a>

```typescript
public readonly preferredVersionsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `defaultOnly`<sup>Required</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly"></a>

```typescript
public readonly defaultOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `hasMajorTarget`<sup>Required</sup> <a name="hasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget"></a>

```typescript
public readonly hasMajorTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasMinorTarget`<sup>Required</sup> <a name="hasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget"></a>

```typescript
public readonly hasMinorTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest"></a>

```typescript
public readonly latest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parameterGroupFamily`<sup>Required</sup> <a name="parameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily"></a>

```typescript
public readonly parameterGroupFamily: string;
```

- *Type:* string

---

##### `preferredMajorTargets`<sup>Required</sup> <a name="preferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets"></a>

```typescript
public readonly preferredMajorTargets: string[];
```

- *Type:* string[]

---

##### `preferredUpgradeTargets`<sup>Required</sup> <a name="preferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets"></a>

```typescript
public readonly preferredUpgradeTargets: string[];
```

- *Type:* string[]

---

##### `preferredVersions`<sup>Required</sup> <a name="preferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions"></a>

```typescript
public readonly preferredVersions: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneEngineVersionConfig <a name="DataAwsNeptuneEngineVersionConfig" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.Initializer"></a>

```typescript
import { dataAwsNeptuneEngineVersion } from '@cdktf/provider-aws'

const dataAwsNeptuneEngineVersionConfig: dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly">defaultOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget">hasMajorTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget">hasMinorTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest">latest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily">parameterGroupFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets">preferredMajorTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets">preferredUpgradeTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions">preferredVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultOnly`<sup>Optional</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly"></a>

```typescript
public readonly defaultOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}.

---

##### `hasMajorTarget`<sup>Optional</sup> <a name="hasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget"></a>

```typescript
public readonly hasMajorTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}.

---

##### `hasMinorTarget`<sup>Optional</sup> <a name="hasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget"></a>

```typescript
public readonly hasMinorTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest"></a>

```typescript
public readonly latest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}.

---

##### `parameterGroupFamily`<sup>Optional</sup> <a name="parameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily"></a>

```typescript
public readonly parameterGroupFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}.

---

##### `preferredMajorTargets`<sup>Optional</sup> <a name="preferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets"></a>

```typescript
public readonly preferredMajorTargets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}.

---

##### `preferredUpgradeTargets`<sup>Optional</sup> <a name="preferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets"></a>

```typescript
public readonly preferredUpgradeTargets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}.

---

##### `preferredVersions`<sup>Optional</sup> <a name="preferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions"></a>

```typescript
public readonly preferredVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#region DataAwsNeptuneEngineVersion#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}.

---



