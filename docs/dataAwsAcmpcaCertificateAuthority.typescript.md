# `dataAwsAcmpcaCertificateAuthority` Submodule <a name="`dataAwsAcmpcaCertificateAuthority` Submodule" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAcmpcaCertificateAuthority <a name="DataAwsAcmpcaCertificateAuthority" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority aws_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig">DataAwsAcmpcaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig">DataAwsAcmpcaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial">serial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode">usageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `revocationConfiguration`<sup>Required</sup> <a name="revocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```typescript
public readonly revocationConfiguration: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a>

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial"></a>

```typescript
public readonly serial: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usageMode`<sup>Required</sup> <a name="usageMode" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode"></a>

```typescript
public readonly usageMode: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAcmpcaCertificateAuthorityConfig <a name="DataAwsAcmpcaCertificateAuthorityConfig" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

const dataAwsAcmpcaCertificateAuthorityConfig: dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}.

---

### DataAwsAcmpcaCertificateAuthorityRevocationConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

const dataAwsAcmpcaCertificateAuthorityRevocationConfiguration: dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration = { ... }
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

const dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration: dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = { ... }
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

const dataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration: dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">customCname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCname`<sup>Required</sup> <a name="customCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```typescript
public readonly customCname: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectAcl`<sup>Required</sup> <a name="s3ObjectAcl" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```typescript
public readonly s3ObjectAcl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocspCustomCname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ocspCustomCname`<sup>Required</sup> <a name="ocspCustomCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```typescript
public readonly ocspCustomCname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsAcmpcaCertificateAuthority } from '@cdktf/provider-aws'

new dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlConfiguration`<sup>Required</sup> <a name="crlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```typescript
public readonly crlConfiguration: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a>

---

##### `ocspConfiguration`<sup>Required</sup> <a name="ocspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```typescript
public readonly ocspConfiguration: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a>

---



