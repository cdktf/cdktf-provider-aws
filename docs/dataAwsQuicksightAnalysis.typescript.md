# `dataAwsQuicksightAnalysis` Submodule <a name="`dataAwsQuicksightAnalysis` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightAnalysis <a name="DataAwsQuicksightAnalysis" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis aws_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

new dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis(scope: Construct, id: string, config: DataAwsQuicksightAnalysisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig">DataAwsQuicksightAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig">DataAwsQuicksightAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsQuicksightAnalysis resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isConstruct"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformElement"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformDataSource"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsQuicksightAnalysis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsQuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsQuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsQuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.definition">definition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lastPublishedTime">lastPublishedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList">DataAwsQuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.themeArn">themeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.analysisIdInput">analysisIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.analysisId">analysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.definition"></a>

```typescript
public readonly definition: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastPublishedTime`<sup>Required</sup> <a name="lastPublishedTime" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lastPublishedTime"></a>

```typescript
public readonly lastPublishedTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.permissions"></a>

```typescript
public readonly permissions: DataAwsQuicksightAnalysisPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList">DataAwsQuicksightAnalysisPermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.themeArn"></a>

```typescript
public readonly themeArn: string;
```

- *Type:* string

---

##### `analysisIdInput`<sup>Optional</sup> <a name="analysisIdInput" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.analysisIdInput"></a>

```typescript
public readonly analysisIdInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightAnalysisConfig <a name="DataAwsQuicksightAnalysisConfig" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.Initializer"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

const dataAwsQuicksightAnalysisConfig: dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.analysisId">analysisId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#analysis_id DataAwsQuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#aws_account_id DataAwsQuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#id DataAwsQuicksightAnalysis#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#tags DataAwsQuicksightAnalysis#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#analysis_id DataAwsQuicksightAnalysis#analysis_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#aws_account_id DataAwsQuicksightAnalysis#aws_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#id DataAwsQuicksightAnalysis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/data-sources/quicksight_analysis#tags DataAwsQuicksightAnalysis#tags}.

---

### DataAwsQuicksightAnalysisPermissions <a name="DataAwsQuicksightAnalysisPermissions" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissions.Initializer"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

const dataAwsQuicksightAnalysisPermissions: dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightAnalysisPermissionsList <a name="DataAwsQuicksightAnalysisPermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

new dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsQuicksightAnalysisPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsQuicksightAnalysisPermissionsOutputReference <a name="DataAwsQuicksightAnalysisPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsQuicksightAnalysis } from '@cdktf/provider-aws'

new dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissions">DataAwsQuicksightAnalysisPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsQuicksightAnalysisPermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightAnalysis.DataAwsQuicksightAnalysisPermissions">DataAwsQuicksightAnalysisPermissions</a>

---



