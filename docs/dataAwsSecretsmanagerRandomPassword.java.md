# `dataAwsSecretsmanagerRandomPassword` Submodule <a name="`dataAwsSecretsmanagerRandomPassword` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerRandomPassword <a name="DataAwsSecretsmanagerRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_secretsmanager_random_password.DataAwsSecretsmanagerRandomPassword;

DataAwsSecretsmanagerRandomPassword.Builder.create(Construct scope, java.lang.String id)
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
//  .excludeCharacters(java.lang.String)
//  .excludeLowercase(java.lang.Boolean)
//  .excludeLowercase(IResolvable)
//  .excludeNumbers(java.lang.Boolean)
//  .excludeNumbers(IResolvable)
//  .excludePunctuation(java.lang.Boolean)
//  .excludePunctuation(IResolvable)
//  .excludeUppercase(java.lang.Boolean)
//  .excludeUppercase(IResolvable)
//  .id(java.lang.String)
//  .includeSpace(java.lang.Boolean)
//  .includeSpace(IResolvable)
//  .passwordLength(java.lang.Number)
//  .randomPassword(java.lang.String)
//  .requireEachIncludedType(java.lang.Boolean)
//  .requireEachIncludedType(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeLowercase">excludeLowercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeNumbers">excludeNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludePunctuation">excludePunctuation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeUppercase">excludeUppercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.includeSpace">includeSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.passwordLength">passwordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.randomPassword">randomPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.requireEachIncludedType">requireEachIncludedType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeCharacters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `excludeLowercase`<sup>Optional</sup> <a name="excludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeLowercase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `excludeNumbers`<sup>Optional</sup> <a name="excludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeNumbers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `excludePunctuation`<sup>Optional</sup> <a name="excludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludePunctuation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `excludeUppercase`<sup>Optional</sup> <a name="excludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeUppercase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSpace`<sup>Optional</sup> <a name="includeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.includeSpace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `passwordLength`<sup>Optional</sup> <a name="passwordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.passwordLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `randomPassword`<sup>Optional</sup> <a name="randomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.randomPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `requireEachIncludedType`<sup>Optional</sup> <a name="requireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.requireEachIncludedType"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters">resetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase">resetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers">resetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation">resetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase">resetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace">resetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength">resetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword">resetRandomPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType">resetRequireEachIncludedType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExcludeCharacters` <a name="resetExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters"></a>

```java
public void resetExcludeCharacters()
```

##### `resetExcludeLowercase` <a name="resetExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase"></a>

```java
public void resetExcludeLowercase()
```

##### `resetExcludeNumbers` <a name="resetExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers"></a>

```java
public void resetExcludeNumbers()
```

##### `resetExcludePunctuation` <a name="resetExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation"></a>

```java
public void resetExcludePunctuation()
```

##### `resetExcludeUppercase` <a name="resetExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase"></a>

```java
public void resetExcludeUppercase()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeSpace` <a name="resetIncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace"></a>

```java
public void resetIncludeSpace()
```

##### `resetPasswordLength` <a name="resetPasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength"></a>

```java
public void resetPasswordLength()
```

##### `resetRandomPassword` <a name="resetRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword"></a>

```java
public void resetRandomPassword()
```

##### `resetRequireEachIncludedType` <a name="resetRequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType"></a>

```java
public void resetRequireEachIncludedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_secretsmanager_random_password.DataAwsSecretsmanagerRandomPassword;

DataAwsSecretsmanagerRandomPassword.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_secretsmanager_random_password.DataAwsSecretsmanagerRandomPassword;

DataAwsSecretsmanagerRandomPassword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_secretsmanager_random_password.DataAwsSecretsmanagerRandomPassword;

DataAwsSecretsmanagerRandomPassword.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput">excludeCharactersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput">excludeLowercaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput">excludeNumbersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput">excludePunctuationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput">excludeUppercaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput">includeSpaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput">passwordLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput">randomPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput">requireEachIncludedTypeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase">excludeLowercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers">excludeNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation">excludePunctuation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase">excludeUppercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace">includeSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength">passwordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword">randomPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `excludeCharactersInput`<sup>Optional</sup> <a name="excludeCharactersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput"></a>

```java
public java.lang.String getExcludeCharactersInput();
```

- *Type:* java.lang.String

---

##### `excludeLowercaseInput`<sup>Optional</sup> <a name="excludeLowercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput"></a>

```java
public java.lang.Object getExcludeLowercaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeNumbersInput`<sup>Optional</sup> <a name="excludeNumbersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput"></a>

```java
public java.lang.Object getExcludeNumbersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludePunctuationInput`<sup>Optional</sup> <a name="excludePunctuationInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput"></a>

```java
public java.lang.Object getExcludePunctuationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeUppercaseInput`<sup>Optional</sup> <a name="excludeUppercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput"></a>

```java
public java.lang.Object getExcludeUppercaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeSpaceInput`<sup>Optional</sup> <a name="includeSpaceInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput"></a>

```java
public java.lang.Object getIncludeSpaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordLengthInput`<sup>Optional</sup> <a name="passwordLengthInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput"></a>

```java
public java.lang.Number getPasswordLengthInput();
```

- *Type:* java.lang.Number

---

##### `randomPasswordInput`<sup>Optional</sup> <a name="randomPasswordInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput"></a>

```java
public java.lang.String getRandomPasswordInput();
```

- *Type:* java.lang.String

---

##### `requireEachIncludedTypeInput`<sup>Optional</sup> <a name="requireEachIncludedTypeInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput"></a>

```java
public java.lang.Object getRequireEachIncludedTypeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeCharacters`<sup>Required</sup> <a name="excludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

---

##### `excludeLowercase`<sup>Required</sup> <a name="excludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase"></a>

```java
public java.lang.Object getExcludeLowercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeNumbers`<sup>Required</sup> <a name="excludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers"></a>

```java
public java.lang.Object getExcludeNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludePunctuation`<sup>Required</sup> <a name="excludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation"></a>

```java
public java.lang.Object getExcludePunctuation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeUppercase`<sup>Required</sup> <a name="excludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase"></a>

```java
public java.lang.Object getExcludeUppercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeSpace`<sup>Required</sup> <a name="includeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace"></a>

```java
public java.lang.Object getIncludeSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordLength`<sup>Required</sup> <a name="passwordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength"></a>

```java
public java.lang.Number getPasswordLength();
```

- *Type:* java.lang.Number

---

##### `randomPassword`<sup>Required</sup> <a name="randomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword"></a>

```java
public java.lang.String getRandomPassword();
```

- *Type:* java.lang.String

---

##### `requireEachIncludedType`<sup>Required</sup> <a name="requireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType"></a>

```java
public java.lang.Object getRequireEachIncludedType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerRandomPasswordConfig <a name="DataAwsSecretsmanagerRandomPasswordConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_secretsmanager_random_password.DataAwsSecretsmanagerRandomPasswordConfig;

DataAwsSecretsmanagerRandomPasswordConfig.builder()
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
//  .excludeCharacters(java.lang.String)
//  .excludeLowercase(java.lang.Boolean)
//  .excludeLowercase(IResolvable)
//  .excludeNumbers(java.lang.Boolean)
//  .excludeNumbers(IResolvable)
//  .excludePunctuation(java.lang.Boolean)
//  .excludePunctuation(IResolvable)
//  .excludeUppercase(java.lang.Boolean)
//  .excludeUppercase(IResolvable)
//  .id(java.lang.String)
//  .includeSpace(java.lang.Boolean)
//  .includeSpace(IResolvable)
//  .passwordLength(java.lang.Number)
//  .randomPassword(java.lang.String)
//  .requireEachIncludedType(java.lang.Boolean)
//  .requireEachIncludedType(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase">excludeLowercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers">excludeNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation">excludePunctuation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase">excludeUppercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace">includeSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength">passwordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword">randomPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `excludeLowercase`<sup>Optional</sup> <a name="excludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase"></a>

```java
public java.lang.Object getExcludeLowercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `excludeNumbers`<sup>Optional</sup> <a name="excludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers"></a>

```java
public java.lang.Object getExcludeNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `excludePunctuation`<sup>Optional</sup> <a name="excludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation"></a>

```java
public java.lang.Object getExcludePunctuation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `excludeUppercase`<sup>Optional</sup> <a name="excludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase"></a>

```java
public java.lang.Object getExcludeUppercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSpace`<sup>Optional</sup> <a name="includeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace"></a>

```java
public java.lang.Object getIncludeSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `passwordLength`<sup>Optional</sup> <a name="passwordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength"></a>

```java
public java.lang.Number getPasswordLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `randomPassword`<sup>Optional</sup> <a name="randomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword"></a>

```java
public java.lang.String getRandomPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `requireEachIncludedType`<sup>Optional</sup> <a name="requireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType"></a>

```java
public java.lang.Object getRequireEachIncludedType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---



