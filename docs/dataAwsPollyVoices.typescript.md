# `dataAwsPollyVoices` Submodule <a name="`dataAwsPollyVoices` Submodule" id="@cdktf/provider-aws.dataAwsPollyVoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsPollyVoices <a name="DataAwsPollyVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices aws_polly_voices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

new dataAwsPollyVoices.DataAwsPollyVoices(scope: Construct, id: string, config?: DataAwsPollyVoicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig">DataAwsPollyVoicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig">DataAwsPollyVoicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices">putVoices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetIncludeAdditionalLanguageCodes">resetIncludeAdditionalLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetVoices">resetVoices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putVoices` <a name="putVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices"></a>

```typescript
public putVoices(value: IResolvable | DataAwsPollyVoicesVoices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]

---

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetIncludeAdditionalLanguageCodes` <a name="resetIncludeAdditionalLanguageCodes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetIncludeAdditionalLanguageCodes"></a>

```typescript
public resetIncludeAdditionalLanguageCodes(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetVoices` <a name="resetVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetVoices"></a>

```typescript
public resetVoices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

dataAwsPollyVoices.DataAwsPollyVoices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsPollyVoices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsPollyVoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsPollyVoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voices">voices</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList">DataAwsPollyVoicesVoicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodesInput">includeAdditionalLanguageCodesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voicesInput">voicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodes">includeAdditionalLanguageCodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `voices`<sup>Required</sup> <a name="voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voices"></a>

```typescript
public readonly voices: DataAwsPollyVoicesVoicesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList">DataAwsPollyVoicesVoicesList</a>

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `includeAdditionalLanguageCodesInput`<sup>Optional</sup> <a name="includeAdditionalLanguageCodesInput" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodesInput"></a>

```typescript
public readonly includeAdditionalLanguageCodesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `voicesInput`<sup>Optional</sup> <a name="voicesInput" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voicesInput"></a>

```typescript
public readonly voicesInput: IResolvable | DataAwsPollyVoicesVoices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `includeAdditionalLanguageCodes`<sup>Required</sup> <a name="includeAdditionalLanguageCodes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodes"></a>

```typescript
public readonly includeAdditionalLanguageCodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsPollyVoicesConfig <a name="DataAwsPollyVoicesConfig" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.Initializer"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

const dataAwsPollyVoicesConfig: dataAwsPollyVoices.DataAwsPollyVoicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.includeAdditionalLanguageCodes">includeAdditionalLanguageCodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.voices">voices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]</code> | voices block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}.

---

##### `includeAdditionalLanguageCodes`<sup>Optional</sup> <a name="includeAdditionalLanguageCodes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.includeAdditionalLanguageCodes"></a>

```typescript
public readonly includeAdditionalLanguageCodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}.

---

##### `voices`<sup>Optional</sup> <a name="voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.voices"></a>

```typescript
public readonly voices: IResolvable | DataAwsPollyVoicesVoices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]

voices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/polly_voices#voices DataAwsPollyVoices#voices}

---

### DataAwsPollyVoicesVoices <a name="DataAwsPollyVoicesVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices.Initializer"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

const dataAwsPollyVoicesVoices: dataAwsPollyVoices.DataAwsPollyVoicesVoices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsPollyVoicesVoicesList <a name="DataAwsPollyVoicesVoicesList" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

new dataAwsPollyVoices.DataAwsPollyVoicesVoicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get"></a>

```typescript
public get(index: number): DataAwsPollyVoicesVoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsPollyVoicesVoices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>[]

---


### DataAwsPollyVoicesVoicesOutputReference <a name="DataAwsPollyVoicesVoicesOutputReference" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer"></a>

```typescript
import { dataAwsPollyVoices } from '@cdktf/provider-aws'

new dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.additionalLanguageCodes">additionalLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.gender">gender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageName">languageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.supportedEngines">supportedEngines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalLanguageCodes`<sup>Required</sup> <a name="additionalLanguageCodes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.additionalLanguageCodes"></a>

```typescript
public readonly additionalLanguageCodes: string[];
```

- *Type:* string[]

---

##### `gender`<sup>Required</sup> <a name="gender" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.gender"></a>

```typescript
public readonly gender: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `languageName`<sup>Required</sup> <a name="languageName" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageName"></a>

```typescript
public readonly languageName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedEngines`<sup>Required</sup> <a name="supportedEngines" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.supportedEngines"></a>

```typescript
public readonly supportedEngines: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsPollyVoicesVoices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>

---



