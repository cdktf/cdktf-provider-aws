# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktf/provider-aws.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUser;

IdentitystoreUser.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .identityStoreId(java.lang.String)
    .name(IdentitystoreUserName)
    .userName(java.lang.String)
//  .addresses(IdentitystoreUserAddresses)
//  .emails(IdentitystoreUserEmails)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .nickname(java.lang.String)
//  .phoneNumbers(IdentitystoreUserPhoneNumbers)
//  .preferredLanguage(java.lang.String)
//  .profileUrl(java.lang.String)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | addresses block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | emails block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickname">nickname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | phone_numbers block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType">userType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}.

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

addresses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

emails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}.

---

##### `nickname`<sup>Optional</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}.

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

phone_numbers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}.

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses">putAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails">putEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers">putPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname">resetNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">resetPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAddresses` <a name="putAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```java
public void putAddresses(IdentitystoreUserAddresses value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---

##### `putEmails` <a name="putEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails"></a>

```java
public void putEmails(IdentitystoreUserEmails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---

##### `putName` <a name="putName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName"></a>

```java
public void putName(IdentitystoreUserName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `putPhoneNumbers` <a name="putPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```java
public void putPhoneNumbers(IdentitystoreUserPhoneNumbers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```java
public void resetAddresses()
```

##### `resetEmails` <a name="resetEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```java
public void resetEmails()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId"></a>

```java
public void resetId()
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetNickname` <a name="resetNickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname"></a>

```java
public void resetNickname()
```

##### `resetPhoneNumbers` <a name="resetPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```java
public void resetPhoneNumbers()
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```java
public void resetPreferredLanguage()
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```java
public void resetProfileUrl()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```java
public void resetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput">addressesInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput">emailsInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput">nameInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput">nicknameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phoneNumbersInput</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput">userTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname">nickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```java
public IdentitystoreUserAddressesOutputReference getAddresses();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a>

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails"></a>

```java
public IdentitystoreUserEmailsOutputReference getEmails();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a>

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds"></a>

```java
public IdentitystoreUserExternalIdsList getExternalIds();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name"></a>

```java
public IdentitystoreUserNameOutputReference getName();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```java
public IdentitystoreUserPhoneNumbersOutputReference getPhoneNumbers();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```java
public IdentitystoreUserAddresses getAddressesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```java
public IdentitystoreUserEmails getEmailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```java
public java.lang.String getIdentityStoreIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```java
public IdentitystoreUserName getNameInput();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nicknameInput`<sup>Optional</sup> <a name="nicknameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput"></a>

```java
public java.lang.String getNicknameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumbersInput`<sup>Optional</sup> <a name="phoneNumbersInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```java
public IdentitystoreUserPhoneNumbers getPhoneNumbersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```java
public java.lang.String getPreferredLanguageInput();
```

- *Type:* java.lang.String

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```java
public java.lang.String getProfileUrlInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```java
public java.lang.String getUserTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `nickname`<sup>Required</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname"></a>

```java
public java.lang.String getNickname();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserAddresses;

IdentitystoreUserAddresses.builder()
//  .country(java.lang.String)
//  .formatted(java.lang.String)
//  .locality(java.lang.String)
//  .postalCode(java.lang.String)
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .region(java.lang.String)
//  .streetAddress(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}.

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserConfig;

IdentitystoreUserConfig.builder()
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
    .displayName(java.lang.String)
    .identityStoreId(java.lang.String)
    .name(IdentitystoreUserName)
    .userName(java.lang.String)
//  .addresses(IdentitystoreUserAddresses)
//  .emails(IdentitystoreUserEmails)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .nickname(java.lang.String)
//  .phoneNumbers(IdentitystoreUserPhoneNumbers)
//  .preferredLanguage(java.lang.String)
//  .profileUrl(java.lang.String)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | addresses block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | emails block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname">nickname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | phone_numbers block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType">userType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```java
public IdentitystoreUserName getName();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}.

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```java
public IdentitystoreUserAddresses getAddresses();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

addresses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```java
public IdentitystoreUserEmails getEmails();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

emails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}.

---

##### `nickname`<sup>Optional</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname"></a>

```java
public java.lang.String getNickname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}.

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```java
public IdentitystoreUserPhoneNumbers getPhoneNumbers();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

phone_numbers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}.

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}.

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}.

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserEmails;

IdentitystoreUserEmails.builder()
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

### IdentitystoreUserExternalIds <a name="IdentitystoreUserExternalIds" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserExternalIds;

IdentitystoreUserExternalIds.builder()
    .build();
```


### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserName;

IdentitystoreUserName.builder()
    .familyName(java.lang.String)
    .givenName(java.lang.String)
//  .formatted(java.lang.String)
//  .honorificPrefix(java.lang.String)
//  .honorificSuffix(java.lang.String)
//  .middleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName">familyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}.

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}.

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}.

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserPhoneNumbers;

IdentitystoreUserPhoneNumbers.builder()
//  .primary(java.lang.Boolean)
//  .primary(IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserAddressesOutputReference;

new IdentitystoreUserAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```java
public void resetFormatted()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```java
public java.lang.String getFormattedInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```java
public IdentitystoreUserAddresses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserEmailsOutputReference;

new IdentitystoreUserEmailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```java
public IdentitystoreUserEmails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserExternalIdsList <a name="IdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserExternalIdsList;

new IdentitystoreUserExternalIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get"></a>

```java
public IdentitystoreUserExternalIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentitystoreUserExternalIdsOutputReference <a name="IdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserExternalIdsOutputReference;

new IdentitystoreUserExternalIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```java
public IdentitystoreUserExternalIds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserNameOutputReference;

new IdentitystoreUserNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">resetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">resetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormatted` <a name="resetFormatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```java
public void resetFormatted()
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```java
public void resetHonorificPrefix()
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```java
public void resetHonorificSuffix()
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```java
public void resetMiddleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formattedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```java
public java.lang.String getFamilyNameInput();
```

- *Type:* java.lang.String

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```java
public java.lang.String getFormattedInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```java
public java.lang.String getHonorificPrefixInput();
```

- *Type:* java.lang.String

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```java
public java.lang.String getHonorificSuffixInput();
```

- *Type:* java.lang.String

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```java
public IdentitystoreUserName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.identitystore_user.IdentitystoreUserPhoneNumbersOutputReference;

new IdentitystoreUserPhoneNumbersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```java
public java.lang.Object getPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```java
public java.lang.Object getPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```java
public IdentitystoreUserPhoneNumbers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---



