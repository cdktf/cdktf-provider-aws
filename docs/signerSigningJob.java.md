# `signerSigningJob` Submodule <a name="`signerSigningJob` Submodule" id="@cdktf/provider-aws.signerSigningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningJob <a name="SignerSigningJob" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job aws_signer_signing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJob;

SignerSigningJob.Builder.create(Construct scope, java.lang.String id)
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
    .destination(SignerSigningJobDestination)
    .profileName(java.lang.String)
    .source(SignerSigningJobSource)
//  .id(java.lang.String)
//  .ignoreSigningJobFailure(java.lang.Boolean)
//  .ignoreSigningJobFailure(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.ignoreSigningJobFailure">ignoreSigningJobFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#destination SignerSigningJob#destination}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#source SignerSigningJob#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreSigningJobFailure`<sup>Optional</sup> <a name="ignoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.ignoreSigningJobFailure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure">resetIgnoreSigningJobFailure</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination"></a>

```java
public void putDestination(SignerSigningJobDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource"></a>

```java
public void putSource(SignerSigningJobSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreSigningJobFailure` <a name="resetIgnoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure"></a>

```java
public void resetIgnoreSigningJobFailure()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJob;

SignerSigningJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJob;

SignerSigningJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJob;

SignerSigningJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt">completedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker">jobInvoker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner">jobOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName">platformDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId">platformId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion">profileVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy">requestedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt">signatureExpiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject">signedObject</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput">ignoreSigningJobFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure">ignoreSigningJobFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `completedAt`<sup>Required</sup> <a name="completedAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt"></a>

```java
public java.lang.String getCompletedAt();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination"></a>

```java
public SignerSigningJobDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobInvoker`<sup>Required</sup> <a name="jobInvoker" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker"></a>

```java
public java.lang.String getJobInvoker();
```

- *Type:* java.lang.String

---

##### `jobOwner`<sup>Required</sup> <a name="jobOwner" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner"></a>

```java
public java.lang.String getJobOwner();
```

- *Type:* java.lang.String

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName"></a>

```java
public java.lang.String getPlatformDisplayName();
```

- *Type:* java.lang.String

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId"></a>

```java
public java.lang.String getPlatformId();
```

- *Type:* java.lang.String

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion"></a>

```java
public java.lang.String getProfileVersion();
```

- *Type:* java.lang.String

---

##### `requestedBy`<sup>Required</sup> <a name="requestedBy" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy"></a>

```java
public java.lang.String getRequestedBy();
```

- *Type:* java.lang.String

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord"></a>

```java
public SignerSigningJobRevocationRecordList getRevocationRecord();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a>

---

##### `signatureExpiresAt`<sup>Required</sup> <a name="signatureExpiresAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt"></a>

```java
public java.lang.String getSignatureExpiresAt();
```

- *Type:* java.lang.String

---

##### `signedObject`<sup>Required</sup> <a name="signedObject" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject"></a>

```java
public SignerSigningJobSignedObjectList getSignedObject();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source"></a>

```java
public SignerSigningJobSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput"></a>

```java
public SignerSigningJobDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreSigningJobFailureInput`<sup>Optional</sup> <a name="ignoreSigningJobFailureInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput"></a>

```java
public java.lang.Object getIgnoreSigningJobFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput"></a>

```java
public SignerSigningJobSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreSigningJobFailure`<sup>Required</sup> <a name="ignoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure"></a>

```java
public java.lang.Object getIgnoreSigningJobFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningJobConfig <a name="SignerSigningJobConfig" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobConfig;

SignerSigningJobConfig.builder()
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
    .destination(SignerSigningJobDestination)
    .profileName(java.lang.String)
    .source(SignerSigningJobSource)
//  .id(java.lang.String)
//  .ignoreSigningJobFailure(java.lang.Boolean)
//  .ignoreSigningJobFailure(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure">ignoreSigningJobFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination"></a>

```java
public SignerSigningJobDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#destination SignerSigningJob#destination}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source"></a>

```java
public SignerSigningJobSource getSource();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#source SignerSigningJob#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreSigningJobFailure`<sup>Optional</sup> <a name="ignoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure"></a>

```java
public java.lang.Object getIgnoreSigningJobFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.

---

### SignerSigningJobDestination <a name="SignerSigningJobDestination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobDestination;

SignerSigningJobDestination.builder()
    .s3(SignerSigningJobDestinationS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3"></a>

```java
public SignerSigningJobDestinationS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobDestinationS3 <a name="SignerSigningJobDestinationS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobDestinationS3;

SignerSigningJobDestinationS3.builder()
    .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}.

---

### SignerSigningJobRevocationRecord <a name="SignerSigningJobRevocationRecord" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobRevocationRecord;

SignerSigningJobRevocationRecord.builder()
    .build();
```


### SignerSigningJobSignedObject <a name="SignerSigningJobSignedObject" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObject;

SignerSigningJobSignedObject.builder()
    .build();
```


### SignerSigningJobSignedObjectS3 <a name="SignerSigningJobSignedObjectS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObjectS3;

SignerSigningJobSignedObjectS3.builder()
    .build();
```


### SignerSigningJobSource <a name="SignerSigningJobSource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSource;

SignerSigningJobSource.builder()
    .s3(SignerSigningJobSourceS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3"></a>

```java
public SignerSigningJobSourceS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobSourceS3 <a name="SignerSigningJobSourceS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSourceS3;

SignerSigningJobSourceS3.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningJobDestinationOutputReference <a name="SignerSigningJobDestinationOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobDestinationOutputReference;

new SignerSigningJobDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3"></a>

```java
public void putS3(SignerSigningJobDestinationS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3"></a>

```java
public SignerSigningJobDestinationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input"></a>

```java
public SignerSigningJobDestinationS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue"></a>

```java
public SignerSigningJobDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---


### SignerSigningJobDestinationS3OutputReference <a name="SignerSigningJobDestinationS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobDestinationS3OutputReference;

new SignerSigningJobDestinationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue"></a>

```java
public SignerSigningJobDestinationS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---


### SignerSigningJobRevocationRecordList <a name="SignerSigningJobRevocationRecordList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobRevocationRecordList;

new SignerSigningJobRevocationRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get"></a>

```java
public SignerSigningJobRevocationRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SignerSigningJobRevocationRecordOutputReference <a name="SignerSigningJobRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobRevocationRecordOutputReference;

new SignerSigningJobRevocationRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt"></a>

```java
public java.lang.String getRevokedAt();
```

- *Type:* java.lang.String

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy"></a>

```java
public java.lang.String getRevokedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue"></a>

```java
public SignerSigningJobRevocationRecord getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a>

---


### SignerSigningJobSignedObjectList <a name="SignerSigningJobSignedObjectList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObjectList;

new SignerSigningJobSignedObjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get"></a>

```java
public SignerSigningJobSignedObjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SignerSigningJobSignedObjectOutputReference <a name="SignerSigningJobSignedObjectOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObjectOutputReference;

new SignerSigningJobSignedObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3"></a>

```java
public SignerSigningJobSignedObjectS3List getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue"></a>

```java
public SignerSigningJobSignedObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a>

---


### SignerSigningJobSignedObjectS3List <a name="SignerSigningJobSignedObjectS3List" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObjectS3List;

new SignerSigningJobSignedObjectS3List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get"></a>

```java
public SignerSigningJobSignedObjectS3OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SignerSigningJobSignedObjectS3OutputReference <a name="SignerSigningJobSignedObjectS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSignedObjectS3OutputReference;

new SignerSigningJobSignedObjectS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue"></a>

```java
public SignerSigningJobSignedObjectS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a>

---


### SignerSigningJobSourceOutputReference <a name="SignerSigningJobSourceOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSourceOutputReference;

new SignerSigningJobSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3"></a>

```java
public void putS3(SignerSigningJobSourceS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3"></a>

```java
public SignerSigningJobSourceS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input"></a>

```java
public SignerSigningJobSourceS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue"></a>

```java
public SignerSigningJobSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---


### SignerSigningJobSourceS3OutputReference <a name="SignerSigningJobSourceS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_job.SignerSigningJobSourceS3OutputReference;

new SignerSigningJobSourceS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue"></a>

```java
public SignerSigningJobSourceS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---



