# `iamAccountPasswordPolicy` Submodule <a name="`iamAccountPasswordPolicy` Submodule" id="@cdktf/provider-aws.iamAccountPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccountPasswordPolicy <a name="IamAccountPasswordPolicy" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy aws_iam_account_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_account_password_policy.IamAccountPasswordPolicy;

IamAccountPasswordPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .allowUsersToChangePassword(java.lang.Boolean)
//  .allowUsersToChangePassword(IResolvable)
//  .hardExpiry(java.lang.Boolean)
//  .hardExpiry(IResolvable)
//  .id(java.lang.String)
//  .maxPasswordAge(java.lang.Number)
//  .minimumPasswordLength(java.lang.Number)
//  .passwordReusePrevention(java.lang.Number)
//  .requireLowercaseCharacters(java.lang.Boolean)
//  .requireLowercaseCharacters(IResolvable)
//  .requireNumbers(java.lang.Boolean)
//  .requireNumbers(IResolvable)
//  .requireSymbols(java.lang.Boolean)
//  .requireSymbols(IResolvable)
//  .requireUppercaseCharacters(java.lang.Boolean)
//  .requireUppercaseCharacters(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.allowUsersToChangePassword">allowUsersToChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.hardExpiry">hardExpiry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.maxPasswordAge">maxPasswordAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.passwordReusePrevention">passwordReusePrevention</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireLowercaseCharacters">requireLowercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireNumbers">requireNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireSymbols">requireSymbols</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireUppercaseCharacters">requireUppercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowUsersToChangePassword`<sup>Optional</sup> <a name="allowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.allowUsersToChangePassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `hardExpiry`<sup>Optional</sup> <a name="hardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.hardExpiry"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxPasswordAge`<sup>Optional</sup> <a name="maxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.maxPasswordAge"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.minimumPasswordLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `passwordReusePrevention`<sup>Optional</sup> <a name="passwordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.passwordReusePrevention"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `requireLowercaseCharacters`<sup>Optional</sup> <a name="requireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireLowercaseCharacters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `requireNumbers`<sup>Optional</sup> <a name="requireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireNumbers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `requireSymbols`<sup>Optional</sup> <a name="requireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireSymbols"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `requireUppercaseCharacters`<sup>Optional</sup> <a name="requireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireUppercaseCharacters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword">resetAllowUsersToChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry">resetHardExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge">resetMaxPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention">resetPasswordReusePrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters">resetRequireLowercaseCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers">resetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols">resetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters">resetRequireUppercaseCharacters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowUsersToChangePassword` <a name="resetAllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword"></a>

```java
public void resetAllowUsersToChangePassword()
```

##### `resetHardExpiry` <a name="resetHardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry"></a>

```java
public void resetHardExpiry()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetMaxPasswordAge` <a name="resetMaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge"></a>

```java
public void resetMaxPasswordAge()
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength"></a>

```java
public void resetMinimumPasswordLength()
```

##### `resetPasswordReusePrevention` <a name="resetPasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention"></a>

```java
public void resetPasswordReusePrevention()
```

##### `resetRequireLowercaseCharacters` <a name="resetRequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters"></a>

```java
public void resetRequireLowercaseCharacters()
```

##### `resetRequireNumbers` <a name="resetRequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers"></a>

```java
public void resetRequireNumbers()
```

##### `resetRequireSymbols` <a name="resetRequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols"></a>

```java
public void resetRequireSymbols()
```

##### `resetRequireUppercaseCharacters` <a name="resetRequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters"></a>

```java
public void resetRequireUppercaseCharacters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_account_password_policy.IamAccountPasswordPolicy;

IamAccountPasswordPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_account_password_policy.IamAccountPasswordPolicy;

IamAccountPasswordPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_account_password_policy.IamAccountPasswordPolicy;

IamAccountPasswordPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords">expirePasswords</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput">allowUsersToChangePasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput">hardExpiryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput">maxPasswordAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput">passwordReusePreventionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput">requireLowercaseCharactersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput">requireNumbersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput">requireSymbolsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput">requireUppercaseCharactersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword">allowUsersToChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry">hardExpiry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge">maxPasswordAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention">passwordReusePrevention</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters">requireLowercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers">requireNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols">requireSymbols</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters">requireUppercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expirePasswords`<sup>Required</sup> <a name="expirePasswords" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords"></a>

```java
public IResolvable getExpirePasswords();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowUsersToChangePasswordInput`<sup>Optional</sup> <a name="allowUsersToChangePasswordInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput"></a>

```java
public java.lang.Object getAllowUsersToChangePasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hardExpiryInput`<sup>Optional</sup> <a name="hardExpiryInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput"></a>

```java
public java.lang.Object getHardExpiryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxPasswordAgeInput`<sup>Optional</sup> <a name="maxPasswordAgeInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput"></a>

```java
public java.lang.Number getMaxPasswordAgeInput();
```

- *Type:* java.lang.Number

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput"></a>

```java
public java.lang.Number getMinimumPasswordLengthInput();
```

- *Type:* java.lang.Number

---

##### `passwordReusePreventionInput`<sup>Optional</sup> <a name="passwordReusePreventionInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput"></a>

```java
public java.lang.Number getPasswordReusePreventionInput();
```

- *Type:* java.lang.Number

---

##### `requireLowercaseCharactersInput`<sup>Optional</sup> <a name="requireLowercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput"></a>

```java
public java.lang.Object getRequireLowercaseCharactersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireNumbersInput`<sup>Optional</sup> <a name="requireNumbersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput"></a>

```java
public java.lang.Object getRequireNumbersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireSymbolsInput`<sup>Optional</sup> <a name="requireSymbolsInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput"></a>

```java
public java.lang.Object getRequireSymbolsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireUppercaseCharactersInput`<sup>Optional</sup> <a name="requireUppercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput"></a>

```java
public java.lang.Object getRequireUppercaseCharactersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUsersToChangePassword`<sup>Required</sup> <a name="allowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword"></a>

```java
public java.lang.Object getAllowUsersToChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hardExpiry`<sup>Required</sup> <a name="hardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry"></a>

```java
public java.lang.Object getHardExpiry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxPasswordAge`<sup>Required</sup> <a name="maxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge"></a>

```java
public java.lang.Number getMaxPasswordAge();
```

- *Type:* java.lang.Number

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength"></a>

```java
public java.lang.Number getMinimumPasswordLength();
```

- *Type:* java.lang.Number

---

##### `passwordReusePrevention`<sup>Required</sup> <a name="passwordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention"></a>

```java
public java.lang.Number getPasswordReusePrevention();
```

- *Type:* java.lang.Number

---

##### `requireLowercaseCharacters`<sup>Required</sup> <a name="requireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters"></a>

```java
public java.lang.Object getRequireLowercaseCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireNumbers`<sup>Required</sup> <a name="requireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers"></a>

```java
public java.lang.Object getRequireNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireSymbols`<sup>Required</sup> <a name="requireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols"></a>

```java
public java.lang.Object getRequireSymbols();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireUppercaseCharacters`<sup>Required</sup> <a name="requireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters"></a>

```java
public java.lang.Object getRequireUppercaseCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccountPasswordPolicyConfig <a name="IamAccountPasswordPolicyConfig" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iam_account_password_policy.IamAccountPasswordPolicyConfig;

IamAccountPasswordPolicyConfig.builder()
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
//  .allowUsersToChangePassword(java.lang.Boolean)
//  .allowUsersToChangePassword(IResolvable)
//  .hardExpiry(java.lang.Boolean)
//  .hardExpiry(IResolvable)
//  .id(java.lang.String)
//  .maxPasswordAge(java.lang.Number)
//  .minimumPasswordLength(java.lang.Number)
//  .passwordReusePrevention(java.lang.Number)
//  .requireLowercaseCharacters(java.lang.Boolean)
//  .requireLowercaseCharacters(IResolvable)
//  .requireNumbers(java.lang.Boolean)
//  .requireNumbers(IResolvable)
//  .requireSymbols(java.lang.Boolean)
//  .requireSymbols(IResolvable)
//  .requireUppercaseCharacters(java.lang.Boolean)
//  .requireUppercaseCharacters(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword">allowUsersToChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry">hardExpiry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge">maxPasswordAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention">passwordReusePrevention</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters">requireLowercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers">requireNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols">requireSymbols</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters">requireUppercaseCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowUsersToChangePassword`<sup>Optional</sup> <a name="allowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword"></a>

```java
public java.lang.Object getAllowUsersToChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `hardExpiry`<sup>Optional</sup> <a name="hardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry"></a>

```java
public java.lang.Object getHardExpiry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxPasswordAge`<sup>Optional</sup> <a name="maxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge"></a>

```java
public java.lang.Number getMaxPasswordAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength"></a>

```java
public java.lang.Number getMinimumPasswordLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `passwordReusePrevention`<sup>Optional</sup> <a name="passwordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention"></a>

```java
public java.lang.Number getPasswordReusePrevention();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `requireLowercaseCharacters`<sup>Optional</sup> <a name="requireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters"></a>

```java
public java.lang.Object getRequireLowercaseCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `requireNumbers`<sup>Optional</sup> <a name="requireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers"></a>

```java
public java.lang.Object getRequireNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `requireSymbols`<sup>Optional</sup> <a name="requireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols"></a>

```java
public java.lang.Object getRequireSymbols();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `requireUppercaseCharacters`<sup>Optional</sup> <a name="requireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters"></a>

```java
public java.lang.Object getRequireUppercaseCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---



