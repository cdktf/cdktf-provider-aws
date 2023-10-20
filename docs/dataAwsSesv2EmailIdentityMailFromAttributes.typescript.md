# `data_aws_sesv2_email_identity_mail_from_attributes`

Refer to the Terraform Registory for docs: [`data_aws_sesv2_email_identity_mail_from_attributes`](https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes).

# `dataAwsSesv2EmailIdentityMailFromAttributes` Submodule <a name="`dataAwsSesv2EmailIdentityMailFromAttributes` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentityMailFromAttributes <a name="DataAwsSesv2EmailIdentityMailFromAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

new dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityMailFromAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig">DataAwsSesv2EmailIdentityMailFromAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig">DataAwsSesv2EmailIdentityMailFromAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2EmailIdentityMailFromAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2EmailIdentityMailFromAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentityMailFromAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentityInput">emailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentityInput"></a>

```typescript
public readonly emailIdentityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityMailFromAttributesConfig <a name="DataAwsSesv2EmailIdentityMailFromAttributesConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.Initializer"></a>

```typescript
import { dataAwsSesv2EmailIdentityMailFromAttributes } from '@cdktf/provider-aws'

const dataAwsSesv2EmailIdentityMailFromAttributesConfig: dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



