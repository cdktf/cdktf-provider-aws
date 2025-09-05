# `quicksightUser` Submodule <a name="`quicksightUser` Submodule" id="@cdktf/provider-aws.quicksightUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightUser <a name="QuicksightUser" id="@cdktf/provider-aws.quicksightUser.QuicksightUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user aws_quicksight_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUser;

QuicksightUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .email(java.lang.String)
    .identityType(java.lang.String)
    .userRole(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .iamArn(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .sessionName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#email QuicksightUser#email}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#identity_type QuicksightUser#identity_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.userRole">userRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_role QuicksightUser#user_role}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#aws_account_id QuicksightUser#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.iamArn">iamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#iam_arn QuicksightUser#iam_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#id QuicksightUser#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#namespace QuicksightUser#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#session_name QuicksightUser#session_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_name QuicksightUser#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#email QuicksightUser#email}.

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.identityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#identity_type QuicksightUser#identity_type}.

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.userRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_role QuicksightUser#user_role}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#aws_account_id QuicksightUser#aws_account_id}.

---

##### `iamArn`<sup>Optional</sup> <a name="iamArn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.iamArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#iam_arn QuicksightUser#iam_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#id QuicksightUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#namespace QuicksightUser#namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#region QuicksightUser#region}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.sessionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#session_name QuicksightUser#session_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_name QuicksightUser#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetIamArn">resetIamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetSessionName">resetSessionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetIamArn` <a name="resetIamArn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetIamArn"></a>

```java
public void resetIamArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSessionName` <a name="resetSessionName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetSessionName"></a>

```java
public void resetSessionName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.resetUserName"></a>

```java
public void resetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUser;

QuicksightUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUser;

QuicksightUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUser;

QuicksightUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUser;

QuicksightUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userInvitationUrl">userInvitationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.iamArnInput">iamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.sessionNameInput">sessionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userRoleInput">userRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.iamArn">iamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userRole">userRole</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `userInvitationUrl`<sup>Required</sup> <a name="userInvitationUrl" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userInvitationUrl"></a>

```java
public java.lang.String getUserInvitationUrl();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `iamArnInput`<sup>Optional</sup> <a name="iamArnInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.iamArnInput"></a>

```java
public java.lang.String getIamArnInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sessionNameInput`<sup>Optional</sup> <a name="sessionNameInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.sessionNameInput"></a>

```java
public java.lang.String getSessionNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userRoleInput"></a>

```java
public java.lang.String getUserRoleInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.iamArn"></a>

```java
public java.lang.String getIamArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sessionName`<sup>Required</sup> <a name="sessionName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightUser.QuicksightUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightUserConfig <a name="QuicksightUserConfig" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_user.QuicksightUserConfig;

QuicksightUserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .email(java.lang.String)
    .identityType(java.lang.String)
    .userRole(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .iamArn(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .sessionName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#email QuicksightUser#email}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#identity_type QuicksightUser#identity_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.userRole">userRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_role QuicksightUser#user_role}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#aws_account_id QuicksightUser#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.iamArn">iamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#iam_arn QuicksightUser#iam_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#id QuicksightUser#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#namespace QuicksightUser#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#session_name QuicksightUser#session_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_name QuicksightUser#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#email QuicksightUser#email}.

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#identity_type QuicksightUser#identity_type}.

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_role QuicksightUser#user_role}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#aws_account_id QuicksightUser#aws_account_id}.

---

##### `iamArn`<sup>Optional</sup> <a name="iamArn" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.iamArn"></a>

```java
public java.lang.String getIamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#iam_arn QuicksightUser#iam_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#id QuicksightUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#namespace QuicksightUser#namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#region QuicksightUser#region}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#session_name QuicksightUser#session_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.quicksightUser.QuicksightUserConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_user#user_name QuicksightUser#user_name}.

---



