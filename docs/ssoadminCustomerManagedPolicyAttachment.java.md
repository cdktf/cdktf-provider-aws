# `ssoadminCustomerManagedPolicyAttachment` Submodule <a name="`ssoadminCustomerManagedPolicyAttachment` Submodule" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminCustomerManagedPolicyAttachment <a name="SsoadminCustomerManagedPolicyAttachment" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment aws_ssoadmin_customer_managed_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .customerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference)
    .instanceArn(java.lang.String)
    .permissionSetArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.customerManagedPolicyReference"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.permissionSetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference"></a>

```java
public void putCustomerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput">permissionSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getCustomerManagedPolicyReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `permissionSetArnInput`<sup>Optional</sup> <a name="permissionSetArnInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput"></a>

```java
public java.lang.String getPermissionSetArnInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn"></a>

```java
public java.lang.String getPermissionSetArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminCustomerManagedPolicyAttachmentConfig <a name="SsoadminCustomerManagedPolicyAttachmentConfig" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentConfig;

SsoadminCustomerManagedPolicyAttachmentConfig.builder()
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
    .customerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference)
    .instanceArn(java.lang.String)
    .permissionSetArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn"></a>

```java
public java.lang.String getPermissionSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;

SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.builder()
    .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference;

new SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---



