# `acmCertificate` Submodule <a name="`acmCertificate` Submodule" id="@cdktf/provider-aws.acmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificate <a name="AcmCertificate" id="@cdktf/provider-aws.acmCertificate.AcmCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificate;

AcmCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .certificateAuthorityArn(java.lang.String)
//  .certificateBody(java.lang.String)
//  .certificateChain(java.lang.String)
//  .domainName(java.lang.String)
//  .earlyRenewalDuration(java.lang.String)
//  .id(java.lang.String)
//  .keyAlgorithm(java.lang.String)
//  .options(AcmCertificateOptions)
//  .privateKey(java.lang.String)
//  .subjectAlternativeNames(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .validationMethod(java.lang.String)
//  .validationOption(IResolvable)
//  .validationOption(java.util.List<AcmCertificateValidationOption>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.earlyRenewalDuration">earlyRenewalDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationMethod">validationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationOption">validationOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>></code> | validation_option block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.certificateChain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `earlyRenewalDuration`<sup>Optional</sup> <a name="earlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.earlyRenewalDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.keyAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validationMethod`<sup>Optional</sup> <a name="validationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `validationOption`<sup>Optional</sup> <a name="validationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.validationOption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>>

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions"></a>

```java
public void putOptions(AcmCertificateOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `putValidationOption` <a name="putValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption"></a>

```java
public void putValidationOption(IResolvable OR java.util.List<AcmCertificateValidationOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>>

---

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn"></a>

```java
public void resetCertificateAuthorityArn()
```

##### `resetCertificateBody` <a name="resetCertificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody"></a>

```java
public void resetCertificateBody()
```

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain"></a>

```java
public void resetCertificateChain()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetEarlyRenewalDuration` <a name="resetEarlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration"></a>

```java
public void resetEarlyRenewalDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm"></a>

```java
public void resetKeyAlgorithm()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetValidationMethod` <a name="resetValidationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod"></a>

```java
public void resetValidationMethod()
```

##### `resetValidationOption` <a name="resetValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption"></a>

```java
public void resetValidationOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificate;

AcmCertificate.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificate;

AcmCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificate;

AcmCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions">domainValidationOptions</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal">pendingRenewal</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility">renewalEligibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary">renewalSummary</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails">validationEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption">validationOption</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput">certificateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput">certificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput">earlyRenewalDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput">validationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput">validationOptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration">earlyRenewalDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod">validationMethod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `domainValidationOptions`<sup>Required</sup> <a name="domainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions"></a>

```java
public AcmCertificateDomainValidationOptionsList getDomainValidationOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a>

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options"></a>

```java
public AcmCertificateOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a>

---

##### `pendingRenewal`<sup>Required</sup> <a name="pendingRenewal" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal"></a>

```java
public IResolvable getPendingRenewal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `renewalEligibility`<sup>Required</sup> <a name="renewalEligibility" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility"></a>

```java
public java.lang.String getRenewalEligibility();
```

- *Type:* java.lang.String

---

##### `renewalSummary`<sup>Required</sup> <a name="renewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary"></a>

```java
public AcmCertificateRenewalSummaryList getRenewalSummary();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validationEmails`<sup>Required</sup> <a name="validationEmails" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails"></a>

```java
public java.util.List<java.lang.String> getValidationEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationOption`<sup>Required</sup> <a name="validationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption"></a>

```java
public AcmCertificateValidationOptionList getValidationOption();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a>

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput"></a>

```java
public java.lang.String getCertificateAuthorityArnInput();
```

- *Type:* java.lang.String

---

##### `certificateBodyInput`<sup>Optional</sup> <a name="certificateBodyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput"></a>

```java
public java.lang.String getCertificateBodyInput();
```

- *Type:* java.lang.String

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput"></a>

```java
public java.lang.String getCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `earlyRenewalDurationInput`<sup>Optional</sup> <a name="earlyRenewalDurationInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput"></a>

```java
public java.lang.String getEarlyRenewalDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput"></a>

```java
public AcmCertificateOptions getOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validationMethodInput`<sup>Optional</sup> <a name="validationMethodInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput"></a>

```java
public java.lang.String getValidationMethodInput();
```

- *Type:* java.lang.String

---

##### `validationOptionInput`<sup>Optional</sup> <a name="validationOptionInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput"></a>

```java
public java.lang.Object getValidationOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>>

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn"></a>

```java
public java.lang.String getCertificateAuthorityArn();
```

- *Type:* java.lang.String

---

##### `certificateBody`<sup>Required</sup> <a name="certificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody"></a>

```java
public java.lang.String getCertificateBody();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `earlyRenewalDuration`<sup>Required</sup> <a name="earlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration"></a>

```java
public java.lang.String getEarlyRenewalDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod"></a>

```java
public java.lang.String getValidationMethod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateConfig <a name="AcmCertificateConfig" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateConfig;

AcmCertificateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .certificateAuthorityArn(java.lang.String)
//  .certificateBody(java.lang.String)
//  .certificateChain(java.lang.String)
//  .domainName(java.lang.String)
//  .earlyRenewalDuration(java.lang.String)
//  .id(java.lang.String)
//  .keyAlgorithm(java.lang.String)
//  .options(AcmCertificateOptions)
//  .privateKey(java.lang.String)
//  .subjectAlternativeNames(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .validationMethod(java.lang.String)
//  .validationOption(IResolvable)
//  .validationOption(java.util.List<AcmCertificateValidationOption>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody">certificateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration">earlyRenewalDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod">validationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption">validationOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>></code> | validation_option block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn"></a>

```java
public java.lang.String getCertificateAuthorityArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody"></a>

```java
public java.lang.String getCertificateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `earlyRenewalDuration`<sup>Optional</sup> <a name="earlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration"></a>

```java
public java.lang.String getEarlyRenewalDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options"></a>

```java
public AcmCertificateOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validationMethod`<sup>Optional</sup> <a name="validationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod"></a>

```java
public java.lang.String getValidationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `validationOption`<sup>Optional</sup> <a name="validationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption"></a>

```java
public java.lang.Object getValidationOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>>

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

---

### AcmCertificateDomainValidationOptions <a name="AcmCertificateDomainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateDomainValidationOptions;

AcmCertificateDomainValidationOptions.builder()
    .build();
```


### AcmCertificateOptions <a name="AcmCertificateOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateOptions;

AcmCertificateOptions.builder()
//  .certificateTransparencyLoggingPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}. |

---

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

### AcmCertificateRenewalSummary <a name="AcmCertificateRenewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateRenewalSummary;

AcmCertificateRenewalSummary.builder()
    .build();
```


### AcmCertificateValidationOption <a name="AcmCertificateValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateValidationOption;

AcmCertificateValidationOption.builder()
    .domainName(java.lang.String)
    .validationDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain">validationDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `validationDomain`<sup>Required</sup> <a name="validationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain"></a>

```java
public java.lang.String getValidationDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateDomainValidationOptionsList <a name="AcmCertificateDomainValidationOptionsList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateDomainValidationOptionsList;

new AcmCertificateDomainValidationOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get"></a>

```java
public AcmCertificateDomainValidationOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AcmCertificateDomainValidationOptionsOutputReference <a name="AcmCertificateDomainValidationOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateDomainValidationOptionsOutputReference;

new AcmCertificateDomainValidationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">resourceRecordName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">resourceRecordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">resourceRecordValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `resourceRecordName`<sup>Required</sup> <a name="resourceRecordName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```java
public java.lang.String getResourceRecordName();
```

- *Type:* java.lang.String

---

##### `resourceRecordType`<sup>Required</sup> <a name="resourceRecordType" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```java
public java.lang.String getResourceRecordType();
```

- *Type:* java.lang.String

---

##### `resourceRecordValue`<sup>Required</sup> <a name="resourceRecordValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```java
public java.lang.String getResourceRecordValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```java
public AcmCertificateDomainValidationOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a>

---


### AcmCertificateOptionsOutputReference <a name="AcmCertificateOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateOptionsOutputReference;

new AcmCertificateOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateTransparencyLoggingPreference` <a name="resetCertificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```java
public void resetCertificateTransparencyLoggingPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificateTransparencyLoggingPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreferenceInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreferenceInput();
```

- *Type:* java.lang.String

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue"></a>

```java
public AcmCertificateOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---


### AcmCertificateRenewalSummaryList <a name="AcmCertificateRenewalSummaryList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateRenewalSummaryList;

new AcmCertificateRenewalSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get"></a>

```java
public AcmCertificateRenewalSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AcmCertificateRenewalSummaryOutputReference <a name="AcmCertificateRenewalSummaryOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateRenewalSummaryOutputReference;

new AcmCertificateRenewalSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus">renewalStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason">renewalStatusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `renewalStatus`<sup>Required</sup> <a name="renewalStatus" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus"></a>

```java
public java.lang.String getRenewalStatus();
```

- *Type:* java.lang.String

---

##### `renewalStatusReason`<sup>Required</sup> <a name="renewalStatusReason" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason"></a>

```java
public java.lang.String getRenewalStatusReason();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue"></a>

```java
public AcmCertificateRenewalSummary getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a>

---


### AcmCertificateValidationOptionList <a name="AcmCertificateValidationOptionList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateValidationOptionList;

new AcmCertificateValidationOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get"></a>

```java
public AcmCertificateValidationOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a>>

---


### AcmCertificateValidationOptionOutputReference <a name="AcmCertificateValidationOptionOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acm_certificate.AcmCertificateValidationOptionOutputReference;

new AcmCertificateValidationOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput">validationDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain">validationDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `validationDomainInput`<sup>Optional</sup> <a name="validationDomainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput"></a>

```java
public java.lang.String getValidationDomainInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `validationDomain`<sup>Required</sup> <a name="validationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain"></a>

```java
public java.lang.String getValidationDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption">AcmCertificateValidationOption</a> OR com.hashicorp.cdktf.IResolvable

---



