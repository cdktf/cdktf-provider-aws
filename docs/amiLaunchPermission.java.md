# `amiLaunchPermission` Submodule <a name="`amiLaunchPermission` Submodule" id="@cdktf/provider-aws.amiLaunchPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiLaunchPermission <a name="AmiLaunchPermission" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission aws_ami_launch_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami_launch_permission.AmiLaunchPermission;

AmiLaunchPermission.Builder.create(Construct scope, java.lang.String id)
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
    .imageId(java.lang.String)
//  .accountId(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .organizationalUnitArn(java.lang.String)
//  .organizationArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationalUnitArn">organizationalUnitArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationArn">organizationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationalUnitArn`<sup>Optional</sup> <a name="organizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationalUnitArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `organizationArn`<sup>Optional</sup> <a name="organizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.organizationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn">resetOrganizationalUnitArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn">resetOrganizationArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId"></a>

```java
public void resetId()
```

##### `resetOrganizationalUnitArn` <a name="resetOrganizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn"></a>

```java
public void resetOrganizationalUnitArn()
```

##### `resetOrganizationArn` <a name="resetOrganizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn"></a>

```java
public void resetOrganizationArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami_launch_permission.AmiLaunchPermission;

AmiLaunchPermission.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami_launch_permission.AmiLaunchPermission;

AmiLaunchPermission.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami_launch_permission.AmiLaunchPermission;

AmiLaunchPermission.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput">organizationalUnitArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput">organizationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn">organizationalUnitArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn">organizationArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitArnInput`<sup>Optional</sup> <a name="organizationalUnitArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput"></a>

```java
public java.lang.String getOrganizationalUnitArnInput();
```

- *Type:* java.lang.String

---

##### `organizationArnInput`<sup>Optional</sup> <a name="organizationArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput"></a>

```java
public java.lang.String getOrganizationArnInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `organizationalUnitArn`<sup>Required</sup> <a name="organizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn"></a>

```java
public java.lang.String getOrganizationalUnitArn();
```

- *Type:* java.lang.String

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn"></a>

```java
public java.lang.String getOrganizationArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AmiLaunchPermissionConfig <a name="AmiLaunchPermissionConfig" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami_launch_permission.AmiLaunchPermissionConfig;

AmiLaunchPermissionConfig.builder()
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
    .imageId(java.lang.String)
//  .accountId(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .organizationalUnitArn(java.lang.String)
//  .organizationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn">organizationalUnitArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn">organizationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationalUnitArn`<sup>Optional</sup> <a name="organizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn"></a>

```java
public java.lang.String getOrganizationalUnitArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `organizationArn`<sup>Optional</sup> <a name="organizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn"></a>

```java
public java.lang.String getOrganizationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---



