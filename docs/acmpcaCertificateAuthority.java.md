# `acmpcaCertificateAuthority` Submodule <a name="`acmpcaCertificateAuthority` Submodule" id="@cdktf/provider-aws.acmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthority <a name="AcmpcaCertificateAuthority" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority aws_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.Builder.create(Construct scope, java.lang.String id)
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
    .certificateAuthorityConfiguration(AcmpcaCertificateAuthorityCertificateAuthorityConfiguration)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .permanentDeletionTimeInDays(java.lang.Number)
//  .revocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AcmpcaCertificateAuthorityTimeouts)
//  .type(java.lang.String)
//  .usageMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.certificateAuthorityConfiguration">certificateAuthorityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | certificate_authority_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.permanentDeletionTimeInDays">permanentDeletionTimeInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | revocation_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode">usageMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityConfiguration`<sup>Required</sup> <a name="certificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.certificateAuthorityConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

certificate_authority_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permanentDeletionTimeInDays`<sup>Optional</sup> <a name="permanentDeletionTimeInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.permanentDeletionTimeInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}.

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="revocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

revocation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#timeouts AcmpcaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}.

---

##### `usageMode`<sup>Optional</sup> <a name="usageMode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration">putCertificateAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration">putRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetPermanentDeletionTimeInDays">resetPermanentDeletionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration">resetRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode">resetUsageMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCertificateAuthorityConfiguration` <a name="putCertificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration"></a>

```java
public void putCertificateAuthorityConfiguration(AcmpcaCertificateAuthorityCertificateAuthorityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCertificateAuthorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

---

##### `putRevocationConfiguration` <a name="putRevocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration"></a>

```java
public void putRevocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts"></a>

```java
public void putTimeouts(AcmpcaCertificateAuthorityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetId"></a>

```java
public void resetId()
```

##### `resetPermanentDeletionTimeInDays` <a name="resetPermanentDeletionTimeInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetPermanentDeletionTimeInDays"></a>

```java
public void resetPermanentDeletionTimeInDays()
```

##### `resetRevocationConfiguration` <a name="resetRevocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration"></a>

```java
public void resetRevocationConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetType"></a>

```java
public void resetType()
```

##### `resetUsageMode` <a name="resetUsageMode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode"></a>

```java
public void resetUsageMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfiguration">certificateAuthorityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.serial">serial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference">AcmpcaCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfigurationInput">certificateAuthorityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDaysInput">permanentDeletionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput">revocationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput">usageModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDays">permanentDeletionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode">usageMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityConfiguration`<sup>Required</sup> <a name="certificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfiguration"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference getCertificateAuthorityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference</a>

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```java
public java.lang.String getCertificateSigningRequest();
```

- *Type:* java.lang.String

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

##### `revocationConfiguration`<sup>Required</sup> <a name="revocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOutputReference getRevocationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.serial"></a>

```java
public java.lang.String getSerial();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeouts"></a>

```java
public AcmpcaCertificateAuthorityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference">AcmpcaCertificateAuthorityTimeoutsOutputReference</a>

---

##### `certificateAuthorityConfigurationInput`<sup>Optional</sup> <a name="certificateAuthorityConfigurationInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateAuthorityConfigurationInput"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfiguration getCertificateAuthorityConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permanentDeletionTimeInDaysInput`<sup>Optional</sup> <a name="permanentDeletionTimeInDaysInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDaysInput"></a>

```java
public java.lang.Number getPermanentDeletionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `revocationConfigurationInput`<sup>Optional</sup> <a name="revocationConfigurationInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfiguration getRevocationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usageModeInput`<sup>Optional</sup> <a name="usageModeInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput"></a>

```java
public java.lang.String getUsageModeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permanentDeletionTimeInDays`<sup>Required</sup> <a name="permanentDeletionTimeInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.permanentDeletionTimeInDays"></a>

```java
public java.lang.Number getPermanentDeletionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usageMode`<sup>Required</sup> <a name="usageMode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode"></a>

```java
public java.lang.String getUsageMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityCertificateAuthorityConfiguration <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration;

AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.builder()
    .keyAlgorithm(java.lang.String)
    .signingAlgorithm(java.lang.String)
    .subject(AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | subject block. |

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}.

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration.property.subject"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject;

AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.builder()
//  .commonName(java.lang.String)
//  .country(java.lang.String)
//  .distinguishedNameQualifier(java.lang.String)
//  .generationQualifier(java.lang.String)
//  .givenName(java.lang.String)
//  .initials(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .pseudonym(java.lang.String)
//  .state(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.initials">initials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.surname">surname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthorityConfig <a name="AcmpcaCertificateAuthorityConfig" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityConfig;

AcmpcaCertificateAuthorityConfig.builder()
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
    .certificateAuthorityConfiguration(AcmpcaCertificateAuthorityCertificateAuthorityConfiguration)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .permanentDeletionTimeInDays(java.lang.Number)
//  .revocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AcmpcaCertificateAuthorityTimeouts)
//  .type(java.lang.String)
//  .usageMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.certificateAuthorityConfiguration">certificateAuthorityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | certificate_authority_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.permanentDeletionTimeInDays">permanentDeletionTimeInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | revocation_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode">usageMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityConfiguration`<sup>Required</sup> <a name="certificateAuthorityConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.certificateAuthorityConfiguration"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfiguration getCertificateAuthorityConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

certificate_authority_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permanentDeletionTimeInDays`<sup>Optional</sup> <a name="permanentDeletionTimeInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.permanentDeletionTimeInDays"></a>

```java
public java.lang.Number getPermanentDeletionTimeInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}.

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="revocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfiguration getRevocationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

revocation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.timeouts"></a>

```java
public AcmpcaCertificateAuthorityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#timeouts AcmpcaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}.

---

##### `usageMode`<sup>Optional</sup> <a name="usageMode" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode"></a>

```java
public java.lang.String getUsageMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}.

---

### AcmpcaCertificateAuthorityRevocationConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfiguration;

AcmpcaCertificateAuthorityRevocationConfiguration.builder()
//  .crlConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration)
//  .ocspConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | crl_configuration block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | ocsp_configuration block. |

---

##### `crlConfiguration`<sup>Optional</sup> <a name="crlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getCrlConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

crl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

##### `ocspConfiguration`<sup>Optional</sup> <a name="ocspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getOcspConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

ocsp_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;

AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.builder()
//  .customCname(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .expirationInDays(java.lang.Number)
//  .s3BucketName(java.lang.String)
//  .s3ObjectAcl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname">customCname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}. |

---

##### `customCname`<sup>Optional</sup> <a name="customCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

```java
public java.lang.String getCustomCname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

##### `s3ObjectAcl`<sup>Optional</sup> <a name="s3ObjectAcl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl"></a>

```java
public java.lang.String getS3ObjectAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;

AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .ocspCustomCname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname">ocspCustomCname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `ocspCustomCname`<sup>Optional</sup> <a name="ocspCustomCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname"></a>

```java
public java.lang.String getOcspCustomCname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

### AcmpcaCertificateAuthorityTimeouts <a name="AcmpcaCertificateAuthorityTimeouts" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityTimeouts;

AcmpcaCertificateAuthorityTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference;

new AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject">putSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject"></a>

```java
public void putSubject(AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subject"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference</a>

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithmInput"></a>

```java
public java.lang.String getSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.subjectInput"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference.property.internalValue"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfiguration">AcmpcaCertificateAuthorityCertificateAuthorityConfiguration</a>

---


### AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference <a name="AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference;

new AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```java
public void resetDistinguishedNameQualifier()
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGenerationQualifier"></a>

```java
public void resetGenerationQualifier()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetInitials` <a name="resetInitials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPseudonym` <a name="resetPseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetPseudonym"></a>

```java
public void resetPseudonym()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetSurname` <a name="resetSurname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```java
public java.lang.String getDistinguishedNameQualifierInput();
```

- *Type:* java.lang.String

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifierInput"></a>

```java
public java.lang.String getGenerationQualifierInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonymInput"></a>

```java
public java.lang.String getPseudonymInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference.property.internalValue"></a>

```java
public AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject">AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname">resetCustomCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl">resetS3ObjectAcl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCname` <a name="resetCustomCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname"></a>

```java
public void resetCustomCname()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays"></a>

```java
public void resetExpirationInDays()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```

##### `resetS3ObjectAcl` <a name="resetS3ObjectAcl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl"></a>

```java
public void resetS3ObjectAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput">customCnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput">s3ObjectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">customCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCnameInput`<sup>Optional</sup> <a name="customCnameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput"></a>

```java
public java.lang.String getCustomCnameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput"></a>

```java
public java.lang.Number getExpirationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectAclInput`<sup>Optional</sup> <a name="s3ObjectAclInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput"></a>

```java
public java.lang.String getS3ObjectAclInput();
```

- *Type:* java.lang.String

---

##### `customCname`<sup>Required</sup> <a name="customCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```java
public java.lang.String getCustomCname();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3ObjectAcl`<sup>Required</sup> <a name="s3ObjectAcl" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```java
public java.lang.String getS3ObjectAcl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname">resetOcspCustomCname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcspCustomCname` <a name="resetOcspCustomCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname"></a>

```java
public void resetOcspCustomCname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput">ocspCustomCnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocspCustomCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspCustomCnameInput`<sup>Optional</sup> <a name="ocspCustomCnameInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput"></a>

```java
public java.lang.String getOcspCustomCnameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspCustomCname`<sup>Required</sup> <a name="ocspCustomCname" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```java
public java.lang.String getOcspCustomCname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration">putCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration">putOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration">resetCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration">resetOcspConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrlConfiguration` <a name="putCrlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration"></a>

```java
public void putCrlConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `putOcspConfiguration` <a name="putOcspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration"></a>

```java
public void putOcspConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `resetCrlConfiguration` <a name="resetCrlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration"></a>

```java
public void resetCrlConfiguration()
```

##### `resetOcspConfiguration` <a name="resetOcspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration"></a>

```java
public void resetOcspConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput">crlConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput">ocspConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crlConfiguration`<sup>Required</sup> <a name="crlConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference getCrlConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `ocspConfiguration`<sup>Required</sup> <a name="ocspConfiguration" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference getOcspConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `crlConfigurationInput`<sup>Optional</sup> <a name="crlConfigurationInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getCrlConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `ocspConfigurationInput`<sup>Optional</sup> <a name="ocspConfigurationInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getOcspConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---


### AcmpcaCertificateAuthorityTimeoutsOutputReference <a name="AcmpcaCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.acmpca_certificate_authority.AcmpcaCertificateAuthorityTimeoutsOutputReference;

new AcmpcaCertificateAuthorityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTimeouts">AcmpcaCertificateAuthorityTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



