# `acmpcaCertificateAuthorityCertificate` Submodule <a name="`acmpcaCertificateAuthorityCertificate` Submodule" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthorityCertificate <a name="AcmpcaCertificateAuthorityCertificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate aws_acmpca_certificate_authority_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer"></a>

```typescript
import { acmpcaCertificateAuthorityCertificate } from '@cdktf/provider-aws'

new acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate(scope: Construct, id: string, config: AcmpcaCertificateAuthorityCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig">AcmpcaCertificateAuthorityCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig">AcmpcaCertificateAuthorityCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetCertificateChain"></a>

```typescript
public resetCertificateChain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct"></a>

```typescript
import { acmpcaCertificateAuthorityCertificate } from '@cdktf/provider-aws'

acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement"></a>

```typescript
import { acmpcaCertificateAuthorityCertificate } from '@cdktf/provider-aws'

acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource"></a>

```typescript
import { acmpcaCertificateAuthorityCertificate } from '@cdktf/provider-aws'

acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChainInput">certificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChainInput"></a>

```typescript
public readonly certificateChainInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityCertificateConfig <a name="AcmpcaCertificateAuthorityCertificateConfig" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.Initializer"></a>

```typescript
import { acmpcaCertificateAuthorityCertificate } from '@cdktf/provider-aws'

const acmpcaCertificateAuthorityCertificateConfig: acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate AcmpcaCertificateAuthorityCertificate#certificate}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateChain">certificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#id AcmpcaCertificateAuthorityCertificate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate AcmpcaCertificateAuthorityCertificate#certificate}.

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#id AcmpcaCertificateAuthorityCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



