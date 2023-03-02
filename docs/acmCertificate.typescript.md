# `acmCertificate` Submodule <a name="`acmCertificate` Submodule" id="@cdktf/provider-aws.acmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificate <a name="AcmCertificate" id="@cdktf/provider-aws.acmCertificate.AcmCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificate(scope: Construct, id: string, config?: AcmCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption">putValidationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn">resetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody">resetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration">resetEarlyRenewalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod">resetValidationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption">resetValidationOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions"></a>

```typescript
public putOptions(value: AcmCertificateOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `putValidationOption` <a name="putValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption"></a>

```typescript
public putValidationOption(value: IResolvable | AcmCertificateValidationOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]

---

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn"></a>

```typescript
public resetCertificateAuthorityArn(): void
```

##### `resetCertificateBody` <a name="resetCertificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody"></a>

```typescript
public resetCertificateBody(): void
```

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain"></a>

```typescript
public resetCertificateChain(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetEarlyRenewalDuration` <a name="resetEarlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration"></a>

```typescript
public resetEarlyRenewalDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames"></a>

```typescript
public resetSubjectAlternativeNames(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetValidationMethod` <a name="resetValidationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod"></a>

```typescript
public resetValidationMethod(): void
```

##### `resetValidationOption` <a name="resetValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption"></a>

```typescript
public resetValidationOption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

acmCertificate.AcmCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

acmCertificate.AcmCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

acmCertificate.AcmCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions">domainValidationOptions</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal">pendingRenewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility">renewalEligibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary">renewalSummary</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails">validationEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption">validationOption</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput">certificateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput">certificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput">earlyRenewalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput">validationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput">validationOptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody">certificateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration">earlyRenewalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod">validationMethod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainValidationOptions`<sup>Required</sup> <a name="domainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions"></a>

```typescript
public readonly domainValidationOptions: AcmCertificateDomainValidationOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a>

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options"></a>

```typescript
public readonly options: AcmCertificateOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a>

---

##### `pendingRenewal`<sup>Required</sup> <a name="pendingRenewal" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal"></a>

```typescript
public readonly pendingRenewal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `renewalEligibility`<sup>Required</sup> <a name="renewalEligibility" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility"></a>

```typescript
public readonly renewalEligibility: string;
```

- *Type:* string

---

##### `renewalSummary`<sup>Required</sup> <a name="renewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary"></a>

```typescript
public readonly renewalSummary: AcmCertificateRenewalSummaryList;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationEmails`<sup>Required</sup> <a name="validationEmails" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails"></a>

```typescript
public readonly validationEmails: string[];
```

- *Type:* string[]

---

##### `validationOption`<sup>Required</sup> <a name="validationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption"></a>

```typescript
public readonly validationOption: AcmCertificateValidationOptionList;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a>

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `certificateBodyInput`<sup>Optional</sup> <a name="certificateBodyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput"></a>

```typescript
public readonly certificateBodyInput: string;
```

- *Type:* string

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput"></a>

```typescript
public readonly certificateChainInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `earlyRenewalDurationInput`<sup>Optional</sup> <a name="earlyRenewalDurationInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput"></a>

```typescript
public readonly earlyRenewalDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput"></a>

```typescript
public readonly optionsInput: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput"></a>

```typescript
public readonly subjectAlternativeNamesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validationMethodInput`<sup>Optional</sup> <a name="validationMethodInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput"></a>

```typescript
public readonly validationMethodInput: string;
```

- *Type:* string

---

##### `validationOptionInput`<sup>Optional</sup> <a name="validationOptionInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput"></a>

```typescript
public readonly validationOptionInput: IResolvable | AcmCertificateValidationOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `certificateBody`<sup>Required</sup> <a name="certificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `earlyRenewalDuration`<sup>Required</sup> <a name="earlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration"></a>

```typescript
public readonly earlyRenewalDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateConfig <a name="AcmCertificateConfig" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

const acmCertificateConfig: acmCertificate.AcmCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody">certificateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain">certificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration">earlyRenewalDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod">validationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption">validationOption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]</code> | validation_option block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `earlyRenewalDuration`<sup>Optional</sup> <a name="earlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration"></a>

```typescript
public readonly earlyRenewalDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options"></a>

```typescript
public readonly options: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validationMethod`<sup>Optional</sup> <a name="validationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `validationOption`<sup>Optional</sup> <a name="validationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption"></a>

```typescript
public readonly validationOption: IResolvable | AcmCertificateValidationOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

---

### AcmCertificateDomainValidationOptions <a name="AcmCertificateDomainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

const acmCertificateDomainValidationOptions: acmCertificate.AcmCertificateDomainValidationOptions = { ... }
```


### AcmCertificateOptions <a name="AcmCertificateOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

const acmCertificateOptions: acmCertificate.AcmCertificateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}. |

---

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

### AcmCertificateRenewalSummary <a name="AcmCertificateRenewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

const acmCertificateRenewalSummary: acmCertificate.AcmCertificateRenewalSummary = { ... }
```


### AcmCertificateValidationOption <a name="AcmCertificateValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

const acmCertificateValidationOption: acmCertificate.AcmCertificateValidationOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain">validationDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `validationDomain`<sup>Required</sup> <a name="validationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain"></a>

```typescript
public readonly validationDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateDomainValidationOptionsList <a name="AcmCertificateDomainValidationOptionsList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateDomainValidationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get"></a>

```typescript
public get(index: number): AcmCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AcmCertificateDomainValidationOptionsOutputReference <a name="AcmCertificateDomainValidationOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateDomainValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">resourceRecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">resourceRecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">resourceRecordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `resourceRecordName`<sup>Required</sup> <a name="resourceRecordName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```typescript
public readonly resourceRecordName: string;
```

- *Type:* string

---

##### `resourceRecordType`<sup>Required</sup> <a name="resourceRecordType" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```typescript
public readonly resourceRecordType: string;
```

- *Type:* string

---

##### `resourceRecordValue`<sup>Required</sup> <a name="resourceRecordValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```typescript
public readonly resourceRecordValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateDomainValidationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a>

---


### AcmCertificateOptionsOutputReference <a name="AcmCertificateOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference">resetCertificateTransparencyLoggingPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateTransparencyLoggingPreference` <a name="resetCertificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```typescript
public resetCertificateTransparencyLoggingPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificateTransparencyLoggingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreferenceInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```typescript
public readonly certificateTransparencyLoggingPreferenceInput: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---


### AcmCertificateRenewalSummaryList <a name="AcmCertificateRenewalSummaryList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateRenewalSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get"></a>

```typescript
public get(index: number): AcmCertificateRenewalSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AcmCertificateRenewalSummaryOutputReference <a name="AcmCertificateRenewalSummaryOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateRenewalSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus">renewalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason">renewalStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renewalStatus`<sup>Required</sup> <a name="renewalStatus" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus"></a>

```typescript
public readonly renewalStatus: string;
```

- *Type:* string

---

##### `renewalStatusReason`<sup>Required</sup> <a name="renewalStatusReason" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason"></a>

```typescript
public readonly renewalStatusReason: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateRenewalSummary;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a>

---


### AcmCertificateValidationOptionList <a name="AcmCertificateValidationOptionList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateValidationOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get"></a>

```typescript
public get(index: number): AcmCertificateValidationOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmCertificateValidationOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>[]

---


### AcmCertificateValidationOptionOutputReference <a name="AcmCertificateValidationOptionOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/provider-aws'

new acmCertificate.AcmCertificateValidationOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput">validationDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain">validationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `validationDomainInput`<sup>Optional</sup> <a name="validationDomainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput"></a>

```typescript
public readonly validationDomainInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `validationDomain`<sup>Required</sup> <a name="validationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain"></a>

```typescript
public readonly validationDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateValidationOption | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a> | cdktf.IResolvable

---



