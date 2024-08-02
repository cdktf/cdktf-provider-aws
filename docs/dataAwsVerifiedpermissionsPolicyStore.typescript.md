# `dataAwsVerifiedpermissionsPolicyStore` Submodule <a name="`dataAwsVerifiedpermissionsPolicyStore` Submodule" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVerifiedpermissionsPolicyStore <a name="DataAwsVerifiedpermissionsPolicyStore" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore(scope: Construct, id: string, config: DataAwsVerifiedpermissionsPolicyStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig">DataAwsVerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig">DataAwsVerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVerifiedpermissionsPolicyStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings"></a>

```typescript
public readonly validationSettings: DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVerifiedpermissionsPolicyStoreConfig <a name="DataAwsVerifiedpermissionsPolicyStoreConfig" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

const dataAwsVerifiedpermissionsPolicyStoreConfig: dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsVerifiedpermissionsPolicyStoreValidationSettings <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

const dataAwsVerifiedpermissionsPolicyStoreValidationSettings: dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get"></a>

```typescript
public get(index: number): DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsVerifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVerifiedpermissionsPolicyStoreValidationSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a>

---



