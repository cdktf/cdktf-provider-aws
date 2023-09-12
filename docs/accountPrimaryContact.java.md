# `aws_account_primary_contact`

Refer to the Terraform Registory for docs: [`aws_account_primary_contact`](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact).

# `accountPrimaryContact` Submodule <a name="`accountPrimaryContact` Submodule" id="@cdktf/provider-aws.accountPrimaryContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPrimaryContact <a name="AccountPrimaryContact" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact aws_account_primary_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.account_primary_contact.AccountPrimaryContact;

AccountPrimaryContact.Builder.create(Construct scope, java.lang.String id)
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
    .addressLine1(java.lang.String)
    .city(java.lang.String)
    .countryCode(java.lang.String)
    .fullName(java.lang.String)
    .phoneNumber(java.lang.String)
    .postalCode(java.lang.String)
//  .accountId(java.lang.String)
//  .addressLine2(java.lang.String)
//  .addressLine3(java.lang.String)
//  .companyName(java.lang.String)
//  .districtOrCounty(java.lang.String)
//  .id(java.lang.String)
//  .stateOrRegion(java.lang.String)
//  .websiteUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.companyName">companyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.city"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.countryCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.fullName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.phoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine2"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine3"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.companyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.districtOrCounty"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.stateOrRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `websiteUrl`<sup>Optional</sup> <a name="websiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.websiteUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl">resetWebsiteUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3"></a>

```java
public void resetAddressLine3()
```

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName"></a>

```java
public void resetCompanyName()
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty"></a>

```java
public void resetDistrictOrCounty()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId"></a>

```java
public void resetId()
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion"></a>

```java
public void resetStateOrRegion()
```

##### `resetWebsiteUrl` <a name="resetWebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl"></a>

```java
public void resetWebsiteUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.account_primary_contact.AccountPrimaryContact;

AccountPrimaryContact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.account_primary_contact.AccountPrimaryContact;

AccountPrimaryContact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.account_primary_contact.AccountPrimaryContact;

AccountPrimaryContact.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input">addressLine3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput">websiteUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input"></a>

```java
public java.lang.String getAddressLine3Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput"></a>

```java
public java.lang.String getDistrictOrCountyInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput"></a>

```java
public java.lang.String getStateOrRegionInput();
```

- *Type:* java.lang.String

---

##### `websiteUrlInput`<sup>Optional</sup> <a name="websiteUrlInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput"></a>

```java
public java.lang.String getWebsiteUrlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl"></a>

```java
public java.lang.String getWebsiteUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPrimaryContactConfig <a name="AccountPrimaryContactConfig" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.account_primary_contact.AccountPrimaryContactConfig;

AccountPrimaryContactConfig.builder()
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
    .addressLine1(java.lang.String)
    .city(java.lang.String)
    .countryCode(java.lang.String)
    .fullName(java.lang.String)
    .phoneNumber(java.lang.String)
    .postalCode(java.lang.String)
//  .accountId(java.lang.String)
//  .addressLine2(java.lang.String)
//  .addressLine3(java.lang.String)
//  .companyName(java.lang.String)
//  .districtOrCounty(java.lang.String)
//  .id(java.lang.String)
//  .stateOrRegion(java.lang.String)
//  .websiteUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty">districtOrCounty</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion">stateOrRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty"></a>

```java
public java.lang.String getDistrictOrCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion"></a>

```java
public java.lang.String getStateOrRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `websiteUrl`<sup>Optional</sup> <a name="websiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl"></a>

```java
public java.lang.String getWebsiteUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---



