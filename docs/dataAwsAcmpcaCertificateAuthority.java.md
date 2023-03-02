# `dataAwsAcmpcaCertificateAuthority` Submodule <a name="`dataAwsAcmpcaCertificateAuthority` Submodule" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAcmpcaCertificateAuthority <a name="DataAwsAcmpcaCertificateAuthority" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority aws_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthority;

DataAwsAcmpcaCertificateAuthority.Builder.create(Construct scope, java.lang.String id)
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthority;

DataAwsAcmpcaCertificateAuthority.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthority;

DataAwsAcmpcaCertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthority;

DataAwsAcmpcaCertificateAuthority.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain">certificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial">serial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode">usageMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain"></a>

```java
public java.lang.String getCertificateChain();
```

- *Type:* java.lang.String

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```java
public java.lang.String getCertificateSigningRequest();
```

- *Type:* java.lang.String

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

##### `revocationConfiguration`<sup>Required</sup> <a name="revocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList getRevocationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a>

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial"></a>

```java
public java.lang.String getSerial();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usageMode`<sup>Required</sup> <a name="usageMode" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode"></a>

```java
public java.lang.String getUsageMode();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAcmpcaCertificateAuthorityConfig <a name="DataAwsAcmpcaCertificateAuthorityConfig" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityConfig;

DataAwsAcmpcaCertificateAuthorityConfig.builder()
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}.

---

### DataAwsAcmpcaCertificateAuthorityRevocationConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration;

DataAwsAcmpcaCertificateAuthorityRevocationConfiguration.builder()
    .build();
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;

DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.builder()
    .build();
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;

DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">customCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCname`<sup>Required</sup> <a name="customCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```java
public java.lang.String getCustomCname();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3ObjectAcl`<sup>Required</sup> <a name="s3ObjectAcl" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```java
public java.lang.String getS3ObjectAcl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocspCustomCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ocspCustomCname`<sup>Required</sup> <a name="ocspCustomCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```java
public java.lang.String getOcspCustomCname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_acmpca_certificate_authority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference;

new DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crlConfiguration`<sup>Required</sup> <a name="crlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList getCrlConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a>

---

##### `ocspConfiguration`<sup>Required</sup> <a name="ocspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList getOcspConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsAcmpcaCertificateAuthorityRevocationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a>

---



