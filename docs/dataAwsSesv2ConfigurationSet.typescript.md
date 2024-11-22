# `dataAwsSesv2ConfigurationSet` Submodule <a name="`dataAwsSesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2ConfigurationSet <a name="DataAwsSesv2ConfigurationSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet(scope: Construct, id: string, config: DataAwsSesv2ConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig">DataAwsSesv2ConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig">DataAwsSesv2ConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2ConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2ConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2ConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions"></a>

```typescript
public readonly deliveryOptions: DataAwsSesv2ConfigurationSetDeliveryOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a>

---

##### `reputationOptions`<sup>Required</sup> <a name="reputationOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions"></a>

```typescript
public readonly reputationOptions: DataAwsSesv2ConfigurationSetReputationOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a>

---

##### `sendingOptions`<sup>Required</sup> <a name="sendingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions"></a>

```typescript
public readonly sendingOptions: DataAwsSesv2ConfigurationSetSendingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a>

---

##### `suppressionOptions`<sup>Required</sup> <a name="suppressionOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions"></a>

```typescript
public readonly suppressionOptions: DataAwsSesv2ConfigurationSetSuppressionOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a>

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions"></a>

```typescript
public readonly trackingOptions: DataAwsSesv2ConfigurationSetTrackingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a>

---

##### `vdmOptions`<sup>Required</sup> <a name="vdmOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions"></a>

```typescript
public readonly vdmOptions: DataAwsSesv2ConfigurationSetVdmOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a>

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2ConfigurationSetConfig <a name="DataAwsSesv2ConfigurationSetConfig" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetConfig: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}.

---

### DataAwsSesv2ConfigurationSetDeliveryOptions <a name="DataAwsSesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetDeliveryOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions = { ... }
```


### DataAwsSesv2ConfigurationSetReputationOptions <a name="DataAwsSesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetReputationOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions = { ... }
```


### DataAwsSesv2ConfigurationSetSendingOptions <a name="DataAwsSesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetSendingOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions = { ... }
```


### DataAwsSesv2ConfigurationSetSuppressionOptions <a name="DataAwsSesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetSuppressionOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions = { ... }
```


### DataAwsSesv2ConfigurationSetTrackingOptions <a name="DataAwsSesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetTrackingOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions = { ... }
```


### DataAwsSesv2ConfigurationSetVdmOptions <a name="DataAwsSesv2ConfigurationSetVdmOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetVdmOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions = { ... }
```


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions = { ... }
```


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

const dataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions: dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2ConfigurationSetDeliveryOptionsList <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sendingPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sendingPoolName`<sup>Required</sup> <a name="sendingPoolName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```typescript
public readonly sendingPoolName: string;
```

- *Type:* string

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetDeliveryOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a>

---


### DataAwsSesv2ConfigurationSetReputationOptionsList <a name="DataAwsSesv2ConfigurationSetReputationOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetReputationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetReputationOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">lastFreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastFreshStart`<sup>Required</sup> <a name="lastFreshStart" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```typescript
public readonly lastFreshStart: string;
```

- *Type:* string

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```typescript
public readonly reputationMetricsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetReputationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a>

---


### DataAwsSesv2ConfigurationSetSendingOptionsList <a name="DataAwsSesv2ConfigurationSetSendingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetSendingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetSendingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sendingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```typescript
public readonly sendingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetSendingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a>

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsList <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressedReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `suppressedReasons`<sup>Required</sup> <a name="suppressedReasons" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```typescript
public readonly suppressedReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetSuppressionOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a>

---


### DataAwsSesv2ConfigurationSetTrackingOptionsList <a name="DataAwsSesv2ConfigurationSetTrackingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```typescript
public readonly customRedirectDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetTrackingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get"></a>

```typescript
public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2ConfigurationSet } from '@cdktf/provider-aws'

new dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashboardOptions`<sup>Required</sup> <a name="dashboardOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```typescript
public readonly dashboardOptions: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a>

---

##### `guardianOptions`<sup>Required</sup> <a name="guardianOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```typescript
public readonly guardianOptions: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2ConfigurationSetVdmOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a>

---



