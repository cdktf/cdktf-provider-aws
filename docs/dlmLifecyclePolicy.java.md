# `dlmLifecyclePolicy` Submodule <a name="`dlmLifecyclePolicy` Submodule" id="@cdktf/provider-aws.dlmLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DlmLifecyclePolicy <a name="DlmLifecyclePolicy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy aws_dlm_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicy;

DlmLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .executionRoleArn(java.lang.String)
    .policyDetails(DlmLifecyclePolicyPolicyDetails)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.policyDetails">policyDetails</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | policy_details block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}.

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.policyDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails">putPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicyDetails` <a name="putPolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails"></a>

```java
public void putPolicyDetails(DlmLifecyclePolicyPolicyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicy;

DlmLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicy;

DlmLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicy;

DlmLifecyclePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetails">policyDetails</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference">DlmLifecyclePolicyPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetailsInput">policyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetails"></a>

```java
public DlmLifecyclePolicyPolicyDetailsOutputReference getPolicyDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference">DlmLifecyclePolicyPolicyDetailsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyDetailsInput`<sup>Optional</sup> <a name="policyDetailsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetailsInput"></a>

```java
public DlmLifecyclePolicyPolicyDetails getPolicyDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DlmLifecyclePolicyConfig <a name="DlmLifecyclePolicyConfig" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyConfig;

DlmLifecyclePolicyConfig.builder()
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
    .description(java.lang.String)
    .executionRoleArn(java.lang.String)
    .policyDetails(DlmLifecyclePolicyPolicyDetails)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.policyDetails">policyDetails</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | policy_details block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}.

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.policyDetails"></a>

```java
public DlmLifecyclePolicyPolicyDetails getPolicyDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}.

---

### DlmLifecyclePolicyPolicyDetails <a name="DlmLifecyclePolicyPolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetails;

DlmLifecyclePolicyPolicyDetails.builder()
//  .action(DlmLifecyclePolicyPolicyDetailsAction)
//  .eventSource(DlmLifecyclePolicyPolicyDetailsEventSource)
//  .parameters(DlmLifecyclePolicyPolicyDetailsParameters)
//  .policyType(java.lang.String)
//  .resourceLocations(java.util.List<java.lang.String>)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .schedule(IResolvable)
//  .schedule(java.util.List<DlmLifecyclePolicyPolicyDetailsSchedule>)
//  .targetTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.eventSource">eventSource</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | event_source block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceLocations">resourceLocations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.targetTags">targetTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.action"></a>

```java
public DlmLifecyclePolicyPolicyDetailsAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#action DlmLifecyclePolicy#action}

---

##### `eventSource`<sup>Optional</sup> <a name="eventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.eventSource"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSource getEventSource();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

event_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.parameters"></a>

```java
public DlmLifecyclePolicyPolicyDetailsParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}.

---

##### `resourceLocations`<sup>Optional</sup> <a name="resourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceLocations"></a>

```java
public java.util.List<java.lang.String> getResourceLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.schedule"></a>

```java
public java.lang.Object getSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}

---

##### `targetTags`<sup>Optional</sup> <a name="targetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.targetTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}.

---

### DlmLifecyclePolicyPolicyDetailsAction <a name="DlmLifecyclePolicyPolicyDetailsAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsAction;

DlmLifecyclePolicyPolicyDetailsAction.builder()
    .crossRegionCopy(IResolvable)
    .crossRegionCopy(java.util.List<DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.crossRegionCopy">crossRegionCopy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>></code> | cross_region_copy block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}. |

---

##### `crossRegionCopy`<sup>Required</sup> <a name="crossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.crossRegionCopy"></a>

```java
public java.lang.Object getCrossRegionCopy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>>

cross_region_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}.

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy;

DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.builder()
    .encryptionConfiguration(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration)
    .target(java.lang.String)
//  .retainRule(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | retain_rule block. |

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.encryptionConfiguration"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}.

---

##### `retainRule`<sup>Optional</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;

DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.builder()
//  .cmkArn(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.cmkArn">cmkArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}. |

---

##### `cmkArn`<sup>Optional</sup> <a name="cmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.cmkArn"></a>

```java
public java.lang.String getCmkArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}.

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule;

DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.builder()
    .interval(java.lang.Number)
    .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsEventSource <a name="DlmLifecyclePolicyPolicyDetailsEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsEventSource;

DlmLifecyclePolicyPolicyDetailsEventSource.builder()
    .parameters(DlmLifecyclePolicyPolicyDetailsEventSourceParameters)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.parameters"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}.

---

### DlmLifecyclePolicyPolicyDetailsEventSourceParameters <a name="DlmLifecyclePolicyPolicyDetailsEventSourceParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters;

DlmLifecyclePolicyPolicyDetailsEventSourceParameters.builder()
    .descriptionRegex(java.lang.String)
    .eventType(java.lang.String)
    .snapshotOwner(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.descriptionRegex">descriptionRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.snapshotOwner">snapshotOwner</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}. |

---

##### `descriptionRegex`<sup>Required</sup> <a name="descriptionRegex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.descriptionRegex"></a>

```java
public java.lang.String getDescriptionRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}.

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}.

---

##### `snapshotOwner`<sup>Required</sup> <a name="snapshotOwner" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.snapshotOwner"></a>

```java
public java.util.List<java.lang.String> getSnapshotOwner();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}.

---

### DlmLifecyclePolicyPolicyDetailsParameters <a name="DlmLifecyclePolicyPolicyDetailsParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsParameters;

DlmLifecyclePolicyPolicyDetailsParameters.builder()
//  .excludeBootVolume(java.lang.Boolean)
//  .excludeBootVolume(IResolvable)
//  .noReboot(java.lang.Boolean)
//  .noReboot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.excludeBootVolume">excludeBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.noReboot">noReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}. |

---

##### `excludeBootVolume`<sup>Optional</sup> <a name="excludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.excludeBootVolume"></a>

```java
public java.lang.Object getExcludeBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}.

---

##### `noReboot`<sup>Optional</sup> <a name="noReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.noReboot"></a>

```java
public java.lang.Object getNoReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}.

---

### DlmLifecyclePolicyPolicyDetailsSchedule <a name="DlmLifecyclePolicyPolicyDetailsSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsSchedule;

DlmLifecyclePolicyPolicyDetailsSchedule.builder()
    .createRule(DlmLifecyclePolicyPolicyDetailsScheduleCreateRule)
    .name(java.lang.String)
    .retainRule(DlmLifecyclePolicyPolicyDetailsScheduleRetainRule)
//  .copyTags(java.lang.Boolean)
//  .copyTags(IResolvable)
//  .crossRegionCopyRule(IResolvable)
//  .crossRegionCopyRule(java.util.List<DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule>)
//  .deprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule)
//  .fastRestoreRule(DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule)
//  .shareRule(DlmLifecyclePolicyPolicyDetailsScheduleShareRule)
//  .tagsToAdd(java.util.Map<java.lang.String, java.lang.String>)
//  .variableTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.createRule">createRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | create_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | retain_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.crossRegionCopyRule">crossRegionCopyRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>></code> | cross_region_copy_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.deprecateRule">deprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | deprecate_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.fastRestoreRule">fastRestoreRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | fast_restore_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.shareRule">shareRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | share_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.tagsToAdd">tagsToAdd</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.variableTags">variableTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}. |

---

##### `createRule`<sup>Required</sup> <a name="createRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.createRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule getCreateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

create_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}.

---

##### `retainRule`<sup>Required</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.copyTags"></a>

```java
public java.lang.Object getCopyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}.

---

##### `crossRegionCopyRule`<sup>Optional</sup> <a name="crossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.crossRegionCopyRule"></a>

```java
public java.lang.Object getCrossRegionCopyRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>>

cross_region_copy_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}

---

##### `deprecateRule`<sup>Optional</sup> <a name="deprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.deprecateRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule getDeprecateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

deprecate_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}

---

##### `fastRestoreRule`<sup>Optional</sup> <a name="fastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.fastRestoreRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule getFastRestoreRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

fast_restore_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}

---

##### `shareRule`<sup>Optional</sup> <a name="shareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.shareRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule getShareRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

share_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#share_rule DlmLifecyclePolicy#share_rule}

---

##### `tagsToAdd`<sup>Optional</sup> <a name="tagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.tagsToAdd"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsToAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}.

---

##### `variableTags`<sup>Optional</sup> <a name="variableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.variableTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariableTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCreateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;

DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.builder()
//  .cronExpression(java.lang.String)
//  .interval(java.lang.Number)
//  .intervalUnit(java.lang.String)
//  .location(java.lang.String)
//  .times(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.times">times</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}. |

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Optional</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}.

---

##### `times`<sup>Optional</sup> <a name="times" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.times"></a>

```java
public java.util.List<java.lang.String> getTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule;

DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.builder()
    .encrypted(java.lang.Boolean)
    .encrypted(IResolvable)
    .target(java.lang.String)
//  .cmkArn(java.lang.String)
//  .copyTags(java.lang.Boolean)
//  .copyTags(IResolvable)
//  .deprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule)
//  .retainRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.cmkArn">cmkArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.deprecateRule">deprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | deprecate_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | retain_rule block. |

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}.

---

##### `cmkArn`<sup>Optional</sup> <a name="cmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.cmkArn"></a>

```java
public java.lang.String getCmkArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}.

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.copyTags"></a>

```java
public java.lang.Object getCopyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}.

---

##### `deprecateRule`<sup>Optional</sup> <a name="deprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.deprecateRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule getDeprecateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

deprecate_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}

---

##### `retainRule`<sup>Optional</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;

DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.builder()
    .interval(java.lang.Number)
    .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;

DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.builder()
    .interval(java.lang.Number)
    .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule;

DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.builder()
//  .count(java.lang.Number)
//  .interval(java.lang.Number)
//  .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Optional</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule;

DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.builder()
    .availabilityZones(java.util.List<java.lang.String>)
//  .count(java.lang.Number)
//  .interval(java.lang.Number)
//  .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}.

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Optional</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleRetainRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;

DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.builder()
//  .count(java.lang.Number)
//  .interval(java.lang.Number)
//  .intervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `intervalUnit`<sup>Optional</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleShareRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule;

DlmLifecyclePolicyPolicyDetailsScheduleShareRule.builder()
    .targetAccounts(java.util.List<java.lang.String>)
//  .unshareInterval(java.lang.Number)
//  .unshareIntervalUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.targetAccounts">targetAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareInterval">unshareInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareIntervalUnit">unshareIntervalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}. |

---

##### `targetAccounts`<sup>Required</sup> <a name="targetAccounts" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.targetAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}.

---

##### `unshareInterval`<sup>Optional</sup> <a name="unshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareInterval"></a>

```java
public java.lang.Number getUnshareInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}.

---

##### `unshareIntervalUnit`<sup>Optional</sup> <a name="unshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareIntervalUnit"></a>

```java
public java.lang.String getUnshareIntervalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetCmkArn">resetCmkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmkArn` <a name="resetCmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetCmkArn"></a>

```java
public void resetCmkArn()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArnInput">cmkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn">cmkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmkArnInput`<sup>Optional</sup> <a name="cmkArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArnInput"></a>

```java
public java.lang.String getCmkArnInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cmkArn`<sup>Required</sup> <a name="cmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn"></a>

```java
public java.lang.String getCmkArn();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>>

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule">putRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resetRetainRule">resetRetainRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---

##### `putRetainRule` <a name="putRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule"></a>

```java
public void putRetainRule(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---

##### `resetRetainRule` <a name="resetRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resetRetainRule"></a>

```java
public void resetRetainRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRuleInput">retainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfiguration"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference</a>

---

##### `retainRule`<sup>Required</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfigurationInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---

##### `retainRuleInput`<sup>Optional</sup> <a name="retainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule getRetainRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a> OR com.hashicorp.cdktf.IResolvable

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsActionOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsActionOutputReference;

new DlmLifecyclePolicyPolicyDetailsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy">putCrossRegionCopy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossRegionCopy` <a name="putCrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy"></a>

```java
public void putCrossRegionCopy(IResolvable OR java.util.List<DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopy">crossRegionCopy</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopyInput">crossRegionCopyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossRegionCopy`<sup>Required</sup> <a name="crossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopy"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList getCrossRegionCopy();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList</a>

---

##### `crossRegionCopyInput`<sup>Optional</sup> <a name="crossRegionCopyInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopyInput"></a>

```java
public java.lang.Object getCrossRegionCopyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---


### DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference <a name="DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference;

new DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters">putParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters"></a>

```java
public void putParameters(DlmLifecyclePolicyPolicyDetailsEventSourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parametersInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---


### DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference <a name="DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference;

new DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegexInput">descriptionRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwnerInput">snapshotOwnerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex">descriptionRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner">snapshotOwner</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionRegexInput`<sup>Optional</sup> <a name="descriptionRegexInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegexInput"></a>

```java
public java.lang.String getDescriptionRegexInput();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `snapshotOwnerInput`<sup>Optional</sup> <a name="snapshotOwnerInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwnerInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotOwnerInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionRegex`<sup>Required</sup> <a name="descriptionRegex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex"></a>

```java
public java.lang.String getDescriptionRegex();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `snapshotOwner`<sup>Required</sup> <a name="snapshotOwner" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner"></a>

```java
public java.util.List<java.lang.String> getSnapshotOwner();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---


### DlmLifecyclePolicyPolicyDetailsOutputReference <a name="DlmLifecyclePolicyPolicyDetailsOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsOutputReference;

new DlmLifecyclePolicyPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource">putEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetEventSource">resetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceLocations">resetResourceLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetTargetTags">resetTargetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```java
public void putAction(DlmLifecyclePolicyPolicyDetailsAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---

##### `putEventSource` <a name="putEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource"></a>

```java
public void putEventSource(DlmLifecyclePolicyPolicyDetailsEventSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters"></a>

```java
public void putParameters(DlmLifecyclePolicyPolicyDetailsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule"></a>

```java
public void putSchedule(IResolvable OR java.util.List<DlmLifecyclePolicyPolicyDetailsSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetEventSource` <a name="resetEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetEventSource"></a>

```java
public void resetEventSource()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```

##### `resetResourceLocations` <a name="resetResourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceLocations"></a>

```java
public void resetResourceLocations()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTargetTags` <a name="resetTargetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetTargetTags"></a>

```java
public void resetTargetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference">DlmLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource">eventSource</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference">DlmLifecyclePolicyPolicyDetailsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList">DlmLifecyclePolicyPolicyDetailsScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSourceInput">eventSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocationsInput">resourceLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTagsInput">targetTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations">resourceLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags">targetTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```java
public DlmLifecyclePolicyPolicyDetailsActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference">DlmLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference getEventSource();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters"></a>

```java
public DlmLifecyclePolicyPolicyDetailsParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference">DlmLifecyclePolicyPolicyDetailsParametersOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.schedule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList">DlmLifecyclePolicyPolicyDetailsScheduleList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSourceInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsEventSource getEventSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parametersInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceLocationsInput`<sup>Optional</sup> <a name="resourceLocationsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocationsInput"></a>

```java
public java.util.List<java.lang.String> getResourceLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>>

---

##### `targetTagsInput`<sup>Optional</sup> <a name="targetTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `resourceLocations`<sup>Required</sup> <a name="resourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations"></a>

```java
public java.util.List<java.lang.String> getResourceLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTags`<sup>Required</sup> <a name="targetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---


### DlmLifecyclePolicyPolicyDetailsParametersOutputReference <a name="DlmLifecyclePolicyPolicyDetailsParametersOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference;

new DlmLifecyclePolicyPolicyDetailsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetExcludeBootVolume">resetExcludeBootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetNoReboot">resetNoReboot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeBootVolume` <a name="resetExcludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetExcludeBootVolume"></a>

```java
public void resetExcludeBootVolume()
```

##### `resetNoReboot` <a name="resetNoReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetNoReboot"></a>

```java
public void resetNoReboot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolumeInput">excludeBootVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noRebootInput">noRebootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume">excludeBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot">noReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeBootVolumeInput`<sup>Optional</sup> <a name="excludeBootVolumeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolumeInput"></a>

```java
public java.lang.Object getExcludeBootVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noRebootInput`<sup>Optional</sup> <a name="noRebootInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noRebootInput"></a>

```java
public java.lang.Object getNoRebootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeBootVolume`<sup>Required</sup> <a name="excludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume"></a>

```java
public java.lang.Object getExcludeBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noReboot`<sup>Required</sup> <a name="noReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot"></a>

```java
public java.lang.Object getNoReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetIntervalUnit">resetIntervalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetTimes">resetTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetIntervalUnit` <a name="resetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetIntervalUnit"></a>

```java
public void resetIntervalUnit()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimes` <a name="resetTimes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetTimes"></a>

```java
public void resetTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.timesInput">timesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.times">times</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `timesInput`<sup>Optional</sup> <a name="timesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.timesInput"></a>

```java
public java.util.List<java.lang.String> getTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `times`<sup>Required</sup> <a name="times" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.times"></a>

```java
public java.util.List<java.lang.String> getTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule">putDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule">putRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCmkArn">resetCmkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetDeprecateRule">resetDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetRetainRule">resetRetainRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeprecateRule` <a name="putDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule"></a>

```java
public void putDeprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---

##### `putRetainRule` <a name="putRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule"></a>

```java
public void putRetainRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---

##### `resetCmkArn` <a name="resetCmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCmkArn"></a>

```java
public void resetCmkArn()
```

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCopyTags"></a>

```java
public void resetCopyTags()
```

##### `resetDeprecateRule` <a name="resetDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetDeprecateRule"></a>

```java
public void resetDeprecateRule()
```

##### `resetRetainRule` <a name="resetRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetRetainRule"></a>

```java
public void resetRetainRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRule">deprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArnInput">cmkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTagsInput">copyTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRuleInput">deprecateRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRuleInput">retainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArn">cmkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deprecateRule`<sup>Required</sup> <a name="deprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference getDeprecateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference</a>

---

##### `retainRule`<sup>Required</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference</a>

---

##### `cmkArnInput`<sup>Optional</sup> <a name="cmkArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArnInput"></a>

```java
public java.lang.String getCmkArnInput();
```

- *Type:* java.lang.String

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTagsInput"></a>

```java
public java.lang.Object getCopyTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deprecateRuleInput`<sup>Optional</sup> <a name="deprecateRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule getDeprecateRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retainRuleInput`<sup>Optional</sup> <a name="retainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule getRetainRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `cmkArn`<sup>Required</sup> <a name="cmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArn"></a>

```java
public java.lang.String getCmkArn();
```

- *Type:* java.lang.String

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTags"></a>

```java
public java.lang.Object getCopyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a> OR com.hashicorp.cdktf.IResolvable

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetIntervalUnit">resetIntervalUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetIntervalUnit` <a name="resetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetIntervalUnit"></a>

```java
public void resetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetIntervalUnit">resetIntervalUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetIntervalUnit` <a name="resetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetIntervalUnit"></a>

```java
public void resetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleList <a name="DlmLifecyclePolicyPolicyDetailsScheduleList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleList;

new DlmLifecyclePolicyPolicyDetailsScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a>>

---


### DlmLifecyclePolicyPolicyDetailsScheduleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule">putCreateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule">putCrossRegionCopyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule">putDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule">putFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule">putRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule">putShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCrossRegionCopyRule">resetCrossRegionCopyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetDeprecateRule">resetDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetFastRestoreRule">resetFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetShareRule">resetShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetTagsToAdd">resetTagsToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetVariableTags">resetVariableTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreateRule` <a name="putCreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule"></a>

```java
public void putCreateRule(DlmLifecyclePolicyPolicyDetailsScheduleCreateRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---

##### `putCrossRegionCopyRule` <a name="putCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule"></a>

```java
public void putCrossRegionCopyRule(IResolvable OR java.util.List<DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>>

---

##### `putDeprecateRule` <a name="putDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule"></a>

```java
public void putDeprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---

##### `putFastRestoreRule` <a name="putFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule"></a>

```java
public void putFastRestoreRule(DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---

##### `putRetainRule` <a name="putRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule"></a>

```java
public void putRetainRule(DlmLifecyclePolicyPolicyDetailsScheduleRetainRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---

##### `putShareRule` <a name="putShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule"></a>

```java
public void putShareRule(DlmLifecyclePolicyPolicyDetailsScheduleShareRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCopyTags"></a>

```java
public void resetCopyTags()
```

##### `resetCrossRegionCopyRule` <a name="resetCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCrossRegionCopyRule"></a>

```java
public void resetCrossRegionCopyRule()
```

##### `resetDeprecateRule` <a name="resetDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetDeprecateRule"></a>

```java
public void resetDeprecateRule()
```

##### `resetFastRestoreRule` <a name="resetFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetFastRestoreRule"></a>

```java
public void resetFastRestoreRule()
```

##### `resetShareRule` <a name="resetShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetShareRule"></a>

```java
public void resetShareRule()
```

##### `resetTagsToAdd` <a name="resetTagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetTagsToAdd"></a>

```java
public void resetTagsToAdd()
```

##### `resetVariableTags` <a name="resetVariableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetVariableTags"></a>

```java
public void resetVariableTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRule">createRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRule">crossRegionCopyRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRule">deprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRule">fastRestoreRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRule">retainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRule">shareRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTagsInput">copyTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRuleInput">createRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRuleInput">crossRegionCopyRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRuleInput">deprecateRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRuleInput">fastRestoreRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRuleInput">retainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRuleInput">shareRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAddInput">tagsToAddInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTagsInput">variableTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTags">copyTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAdd">tagsToAdd</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTags">variableTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createRule`<sup>Required</sup> <a name="createRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference getCreateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference</a>

---

##### `crossRegionCopyRule`<sup>Required</sup> <a name="crossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList getCrossRegionCopyRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList</a>

---

##### `deprecateRule`<sup>Required</sup> <a name="deprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference getDeprecateRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference</a>

---

##### `fastRestoreRule`<sup>Required</sup> <a name="fastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference getFastRestoreRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference</a>

---

##### `retainRule`<sup>Required</sup> <a name="retainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference getRetainRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference</a>

---

##### `shareRule`<sup>Required</sup> <a name="shareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRule"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference getShareRule();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference</a>

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTagsInput"></a>

```java
public java.lang.Object getCopyTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createRuleInput`<sup>Optional</sup> <a name="createRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule getCreateRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---

##### `crossRegionCopyRuleInput`<sup>Optional</sup> <a name="crossRegionCopyRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRuleInput"></a>

```java
public java.lang.Object getCrossRegionCopyRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule</a>>

---

##### `deprecateRuleInput`<sup>Optional</sup> <a name="deprecateRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule getDeprecateRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---

##### `fastRestoreRuleInput`<sup>Optional</sup> <a name="fastRestoreRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule getFastRestoreRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retainRuleInput`<sup>Optional</sup> <a name="retainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule getRetainRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---

##### `shareRuleInput`<sup>Optional</sup> <a name="shareRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRuleInput"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule getShareRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---

##### `tagsToAddInput`<sup>Optional</sup> <a name="tagsToAddInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAddInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsToAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variableTagsInput`<sup>Optional</sup> <a name="variableTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariableTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTags"></a>

```java
public java.lang.Object getCopyTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tagsToAdd`<sup>Required</sup> <a name="tagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAdd"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsToAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variableTags`<sup>Required</sup> <a name="variableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariableTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule">DlmLifecyclePolicyPolicyDetailsSchedule</a> OR com.hashicorp.cdktf.IResolvable

---


### DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetIntervalUnit">resetIntervalUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetIntervalUnit` <a name="resetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetIntervalUnit"></a>

```java
public void resetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnitInput">intervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnit">intervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `intervalUnitInput`<sup>Optional</sup> <a name="intervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnitInput"></a>

```java
public java.lang.String getIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `intervalUnit`<sup>Required</sup> <a name="intervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnit"></a>

```java
public java.lang.String getIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dlm_lifecycle_policy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference;

new DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareInterval">resetUnshareInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareIntervalUnit">resetUnshareIntervalUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnshareInterval` <a name="resetUnshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareInterval"></a>

```java
public void resetUnshareInterval()
```

##### `resetUnshareIntervalUnit` <a name="resetUnshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareIntervalUnit"></a>

```java
public void resetUnshareIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccountsInput">targetAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalInput">unshareIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnitInput">unshareIntervalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccounts">targetAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareInterval">unshareInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnit">unshareIntervalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetAccountsInput`<sup>Optional</sup> <a name="targetAccountsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unshareIntervalInput`<sup>Optional</sup> <a name="unshareIntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalInput"></a>

```java
public java.lang.Number getUnshareIntervalInput();
```

- *Type:* java.lang.Number

---

##### `unshareIntervalUnitInput`<sup>Optional</sup> <a name="unshareIntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnitInput"></a>

```java
public java.lang.String getUnshareIntervalUnitInput();
```

- *Type:* java.lang.String

---

##### `targetAccounts`<sup>Required</sup> <a name="targetAccounts" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unshareInterval`<sup>Required</sup> <a name="unshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareInterval"></a>

```java
public java.lang.Number getUnshareInterval();
```

- *Type:* java.lang.Number

---

##### `unshareIntervalUnit`<sup>Required</sup> <a name="unshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnit"></a>

```java
public java.lang.String getUnshareIntervalUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.internalValue"></a>

```java
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---



