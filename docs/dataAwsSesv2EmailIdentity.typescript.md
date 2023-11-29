# `dataAwsSesv2EmailIdentity` Submodule <a name="`dataAwsSesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentity <a name="DataAwsSesv2EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

new dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2EmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2EmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus">verifiedForSendingStatus</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput">emailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: DataAwsSesv2EmailIdentityDkimSigningAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="verifiedForSendingStatus" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```typescript
public readonly verifiedForSendingStatus: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput"></a>

```typescript
public readonly emailIdentityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityConfig <a name="DataAwsSesv2EmailIdentityConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

const dataAwsSesv2EmailIdentityConfig: dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}.

---

### DataAwsSesv2EmailIdentityDkimSigningAttributes <a name="DataAwsSesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

const dataAwsSesv2EmailIdentityDkimSigningAttributes: dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2EmailIdentityDkimSigningAttributesList <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesList" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

new dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get"></a>

```typescript
public get(index: number): DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentity } from '@cdktf/provider-aws'

new dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">currentSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">lastKeyGenerationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">signingAttributesOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">tokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSigningKeyLength`<sup>Required</sup> <a name="currentSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```typescript
public readonly currentSigningKeyLength: string;
```

- *Type:* string

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

---

##### `lastKeyGenerationTimestamp`<sup>Required</sup> <a name="lastKeyGenerationTimestamp" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```typescript
public readonly lastKeyGenerationTimestamp: string;
```

- *Type:* string

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

---

##### `signingAttributesOrigin`<sup>Required</sup> <a name="signingAttributesOrigin" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```typescript
public readonly signingAttributesOrigin: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```typescript
public readonly tokens: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSesv2EmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a>

---



