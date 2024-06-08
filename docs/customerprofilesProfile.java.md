# `customerprofilesProfile` Submodule <a name="`customerprofilesProfile` Submodule" id="@cdktf/provider-aws.customerprofilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesProfile <a name="CustomerprofilesProfile" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfile;

CustomerprofilesProfile.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .accountNumber(java.lang.String)
//  .additionalInformation(java.lang.String)
//  .address(CustomerprofilesProfileAddress)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .billingAddress(CustomerprofilesProfileBillingAddress)
//  .birthDate(java.lang.String)
//  .businessEmailAddress(java.lang.String)
//  .businessName(java.lang.String)
//  .businessPhoneNumber(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .genderString(java.lang.String)
//  .homePhoneNumber(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .mailingAddress(CustomerprofilesProfileMailingAddress)
//  .middleName(java.lang.String)
//  .mobilePhoneNumber(java.lang.String)
//  .partyTypeString(java.lang.String)
//  .personalEmailAddress(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .shippingAddress(CustomerprofilesProfileShippingAddress)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.accountNumber">accountNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.additionalInformation">additionalInformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.billingAddress">billingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.birthDate">birthDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessEmailAddress">businessEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessName">businessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessPhoneNumber">businessPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.genderString">genderString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.homePhoneNumber">homePhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mailingAddress">mailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.partyTypeString">partyTypeString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.personalEmailAddress">personalEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `accountNumber`<sup>Optional</sup> <a name="accountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.accountNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `additionalInformation`<sup>Optional</sup> <a name="additionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.additionalInformation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.address"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.attributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `billingAddress`<sup>Optional</sup> <a name="billingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.billingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `birthDate`<sup>Optional</sup> <a name="birthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.birthDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `businessEmailAddress`<sup>Optional</sup> <a name="businessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessEmailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `businessName`<sup>Optional</sup> <a name="businessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `businessPhoneNumber`<sup>Optional</sup> <a name="businessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessPhoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `genderString`<sup>Optional</sup> <a name="genderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.genderString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `homePhoneNumber`<sup>Optional</sup> <a name="homePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.homePhoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `mailingAddress`<sup>Optional</sup> <a name="mailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mailingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.middleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `mobilePhoneNumber`<sup>Optional</sup> <a name="mobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mobilePhoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `partyTypeString`<sup>Optional</sup> <a name="partyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.partyTypeString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `personalEmailAddress`<sup>Optional</sup> <a name="personalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.personalEmailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.phoneNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.shippingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress">putAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress">putBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress">putMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress">putShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber">resetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation">resetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress">resetBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate">resetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress">resetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName">resetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber">resetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString">resetGenderString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber">resetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress">resetMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber">resetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString">resetPartyTypeString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress">resetPersonalEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress">resetShippingAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddress` <a name="putAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress"></a>

```java
public void putAddress(CustomerprofilesProfileAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `putBillingAddress` <a name="putBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress"></a>

```java
public void putBillingAddress(CustomerprofilesProfileBillingAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `putMailingAddress` <a name="putMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress"></a>

```java
public void putMailingAddress(CustomerprofilesProfileMailingAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `putShippingAddress` <a name="putShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress"></a>

```java
public void putShippingAddress(CustomerprofilesProfileShippingAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `resetAccountNumber` <a name="resetAccountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber"></a>

```java
public void resetAccountNumber()
```

##### `resetAdditionalInformation` <a name="resetAdditionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation"></a>

```java
public void resetAdditionalInformation()
```

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetBillingAddress` <a name="resetBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress"></a>

```java
public void resetBillingAddress()
```

##### `resetBirthDate` <a name="resetBirthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate"></a>

```java
public void resetBirthDate()
```

##### `resetBusinessEmailAddress` <a name="resetBusinessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress"></a>

```java
public void resetBusinessEmailAddress()
```

##### `resetBusinessName` <a name="resetBusinessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName"></a>

```java
public void resetBusinessName()
```

##### `resetBusinessPhoneNumber` <a name="resetBusinessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber"></a>

```java
public void resetBusinessPhoneNumber()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetGenderString` <a name="resetGenderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString"></a>

```java
public void resetGenderString()
```

##### `resetHomePhoneNumber` <a name="resetHomePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber"></a>

```java
public void resetHomePhoneNumber()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId"></a>

```java
public void resetId()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetMailingAddress` <a name="resetMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress"></a>

```java
public void resetMailingAddress()
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName"></a>

```java
public void resetMiddleName()
```

##### `resetMobilePhoneNumber` <a name="resetMobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber"></a>

```java
public void resetMobilePhoneNumber()
```

##### `resetPartyTypeString` <a name="resetPartyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString"></a>

```java
public void resetPartyTypeString()
```

##### `resetPersonalEmailAddress` <a name="resetPersonalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress"></a>

```java
public void resetPersonalEmailAddress()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetShippingAddress` <a name="resetShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress"></a>

```java
public void resetShippingAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfile;

CustomerprofilesProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfile;

CustomerprofilesProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfile;

CustomerprofilesProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfile;

CustomerprofilesProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress">billingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress">mailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput">accountNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput">additionalInformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput">addressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput">billingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput">birthDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput">businessEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput">businessNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput">businessPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput">genderStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput">homePhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput">mailingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput">mobilePhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput">partyTypeStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput">personalEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput">shippingAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber">accountNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation">additionalInformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate">birthDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress">businessEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName">businessName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString">genderString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber">homePhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString">partyTypeString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress">personalEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address"></a>

```java
public CustomerprofilesProfileAddressOutputReference getAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a>

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress"></a>

```java
public CustomerprofilesProfileBillingAddressOutputReference getBillingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a>

---

##### `mailingAddress`<sup>Required</sup> <a name="mailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress"></a>

```java
public CustomerprofilesProfileMailingAddressOutputReference getMailingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a>

---

##### `shippingAddress`<sup>Required</sup> <a name="shippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress"></a>

```java
public CustomerprofilesProfileShippingAddressOutputReference getShippingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a>

---

##### `accountNumberInput`<sup>Optional</sup> <a name="accountNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput"></a>

```java
public java.lang.String getAccountNumberInput();
```

- *Type:* java.lang.String

---

##### `additionalInformationInput`<sup>Optional</sup> <a name="additionalInformationInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput"></a>

```java
public java.lang.String getAdditionalInformationInput();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput"></a>

```java
public CustomerprofilesProfileAddress getAddressInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `billingAddressInput`<sup>Optional</sup> <a name="billingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput"></a>

```java
public CustomerprofilesProfileBillingAddress getBillingAddressInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `birthDateInput`<sup>Optional</sup> <a name="birthDateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput"></a>

```java
public java.lang.String getBirthDateInput();
```

- *Type:* java.lang.String

---

##### `businessEmailAddressInput`<sup>Optional</sup> <a name="businessEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput"></a>

```java
public java.lang.String getBusinessEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `businessNameInput`<sup>Optional</sup> <a name="businessNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput"></a>

```java
public java.lang.String getBusinessNameInput();
```

- *Type:* java.lang.String

---

##### `businessPhoneNumberInput`<sup>Optional</sup> <a name="businessPhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput"></a>

```java
public java.lang.String getBusinessPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `genderStringInput`<sup>Optional</sup> <a name="genderStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput"></a>

```java
public java.lang.String getGenderStringInput();
```

- *Type:* java.lang.String

---

##### `homePhoneNumberInput`<sup>Optional</sup> <a name="homePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput"></a>

```java
public java.lang.String getHomePhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `mailingAddressInput`<sup>Optional</sup> <a name="mailingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput"></a>

```java
public CustomerprofilesProfileMailingAddress getMailingAddressInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `mobilePhoneNumberInput`<sup>Optional</sup> <a name="mobilePhoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput"></a>

```java
public java.lang.String getMobilePhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `partyTypeStringInput`<sup>Optional</sup> <a name="partyTypeStringInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput"></a>

```java
public java.lang.String getPartyTypeStringInput();
```

- *Type:* java.lang.String

---

##### `personalEmailAddressInput`<sup>Optional</sup> <a name="personalEmailAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput"></a>

```java
public java.lang.String getPersonalEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `shippingAddressInput`<sup>Optional</sup> <a name="shippingAddressInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput"></a>

```java
public CustomerprofilesProfileShippingAddress getShippingAddressInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber"></a>

```java
public java.lang.String getAccountNumber();
```

- *Type:* java.lang.String

---

##### `additionalInformation`<sup>Required</sup> <a name="additionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation"></a>

```java
public java.lang.String getAdditionalInformation();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `birthDate`<sup>Required</sup> <a name="birthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate"></a>

```java
public java.lang.String getBirthDate();
```

- *Type:* java.lang.String

---

##### `businessEmailAddress`<sup>Required</sup> <a name="businessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress"></a>

```java
public java.lang.String getBusinessEmailAddress();
```

- *Type:* java.lang.String

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName"></a>

```java
public java.lang.String getBusinessName();
```

- *Type:* java.lang.String

---

##### `businessPhoneNumber`<sup>Required</sup> <a name="businessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber"></a>

```java
public java.lang.String getBusinessPhoneNumber();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `genderString`<sup>Required</sup> <a name="genderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString"></a>

```java
public java.lang.String getGenderString();
```

- *Type:* java.lang.String

---

##### `homePhoneNumber`<sup>Required</sup> <a name="homePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber"></a>

```java
public java.lang.String getHomePhoneNumber();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `mobilePhoneNumber`<sup>Required</sup> <a name="mobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber"></a>

```java
public java.lang.String getMobilePhoneNumber();
```

- *Type:* java.lang.String

---

##### `partyTypeString`<sup>Required</sup> <a name="partyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString"></a>

```java
public java.lang.String getPartyTypeString();
```

- *Type:* java.lang.String

---

##### `personalEmailAddress`<sup>Required</sup> <a name="personalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress"></a>

```java
public java.lang.String getPersonalEmailAddress();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesProfileAddress <a name="CustomerprofilesProfileAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileAddress;

CustomerprofilesProfileAddress.builder()
//  .address1(java.lang.String)
//  .address2(java.lang.String)
//  .address3(java.lang.String)
//  .address4(java.lang.String)
//  .city(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3">address3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4">address4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileBillingAddress <a name="CustomerprofilesProfileBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileBillingAddress;

CustomerprofilesProfileBillingAddress.builder()
//  .address1(java.lang.String)
//  .address2(java.lang.String)
//  .address3(java.lang.String)
//  .address4(java.lang.String)
//  .city(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3">address3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4">address4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileConfig <a name="CustomerprofilesProfileConfig" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileConfig;

CustomerprofilesProfileConfig.builder()
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
    .domainName(java.lang.String)
//  .accountNumber(java.lang.String)
//  .additionalInformation(java.lang.String)
//  .address(CustomerprofilesProfileAddress)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .billingAddress(CustomerprofilesProfileBillingAddress)
//  .birthDate(java.lang.String)
//  .businessEmailAddress(java.lang.String)
//  .businessName(java.lang.String)
//  .businessPhoneNumber(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .genderString(java.lang.String)
//  .homePhoneNumber(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .mailingAddress(CustomerprofilesProfileMailingAddress)
//  .middleName(java.lang.String)
//  .mobilePhoneNumber(java.lang.String)
//  .partyTypeString(java.lang.String)
//  .personalEmailAddress(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .shippingAddress(CustomerprofilesProfileShippingAddress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber">accountNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation">additionalInformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress">billingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate">birthDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress">businessEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName">businessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString">genderString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber">homePhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress">mailingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString">partyTypeString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress">personalEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `accountNumber`<sup>Optional</sup> <a name="accountNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber"></a>

```java
public java.lang.String getAccountNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `additionalInformation`<sup>Optional</sup> <a name="additionalInformation" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation"></a>

```java
public java.lang.String getAdditionalInformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address"></a>

```java
public CustomerprofilesProfileAddress getAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `billingAddress`<sup>Optional</sup> <a name="billingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress"></a>

```java
public CustomerprofilesProfileBillingAddress getBillingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `birthDate`<sup>Optional</sup> <a name="birthDate" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate"></a>

```java
public java.lang.String getBirthDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `businessEmailAddress`<sup>Optional</sup> <a name="businessEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress"></a>

```java
public java.lang.String getBusinessEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `businessName`<sup>Optional</sup> <a name="businessName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName"></a>

```java
public java.lang.String getBusinessName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `businessPhoneNumber`<sup>Optional</sup> <a name="businessPhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber"></a>

```java
public java.lang.String getBusinessPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `genderString`<sup>Optional</sup> <a name="genderString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString"></a>

```java
public java.lang.String getGenderString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `homePhoneNumber`<sup>Optional</sup> <a name="homePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber"></a>

```java
public java.lang.String getHomePhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `mailingAddress`<sup>Optional</sup> <a name="mailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress"></a>

```java
public CustomerprofilesProfileMailingAddress getMailingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `mobilePhoneNumber`<sup>Optional</sup> <a name="mobilePhoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber"></a>

```java
public java.lang.String getMobilePhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `partyTypeString`<sup>Optional</sup> <a name="partyTypeString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString"></a>

```java
public java.lang.String getPartyTypeString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `personalEmailAddress`<sup>Optional</sup> <a name="personalEmailAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress"></a>

```java
public java.lang.String getPersonalEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress"></a>

```java
public CustomerprofilesProfileShippingAddress getShippingAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

### CustomerprofilesProfileMailingAddress <a name="CustomerprofilesProfileMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileMailingAddress;

CustomerprofilesProfileMailingAddress.builder()
//  .address1(java.lang.String)
//  .address2(java.lang.String)
//  .address3(java.lang.String)
//  .address4(java.lang.String)
//  .city(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3">address3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4">address4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileShippingAddress <a name="CustomerprofilesProfileShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileShippingAddress;

CustomerprofilesProfileShippingAddress.builder()
//  .address1(java.lang.String)
//  .address2(java.lang.String)
//  .address3(java.lang.String)
//  .address4(java.lang.String)
//  .city(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1">address1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2">address2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3">address3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4">address4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesProfileAddressOutputReference <a name="CustomerprofilesProfileAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileAddressOutputReference;

new CustomerprofilesProfileAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1"></a>

```java
public void resetAddress1()
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2"></a>

```java
public void resetAddress2()
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3"></a>

```java
public void resetAddress3()
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4"></a>

```java
public void resetAddress4()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input">address1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input">address2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input">address3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input">address4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1">address1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2">address2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3">address3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4">address4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input"></a>

```java
public java.lang.String getAddress1Input();
```

- *Type:* java.lang.String

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input"></a>

```java
public java.lang.String getAddress2Input();
```

- *Type:* java.lang.String

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input"></a>

```java
public java.lang.String getAddress3Input();
```

- *Type:* java.lang.String

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input"></a>

```java
public java.lang.String getAddress4Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue"></a>

```java
public CustomerprofilesProfileAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---


### CustomerprofilesProfileBillingAddressOutputReference <a name="CustomerprofilesProfileBillingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileBillingAddressOutputReference;

new CustomerprofilesProfileBillingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1"></a>

```java
public void resetAddress1()
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2"></a>

```java
public void resetAddress2()
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3"></a>

```java
public void resetAddress3()
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4"></a>

```java
public void resetAddress4()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1">address1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2">address2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3">address3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4">address4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input"></a>

```java
public java.lang.String getAddress1Input();
```

- *Type:* java.lang.String

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input"></a>

```java
public java.lang.String getAddress2Input();
```

- *Type:* java.lang.String

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input"></a>

```java
public java.lang.String getAddress3Input();
```

- *Type:* java.lang.String

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input"></a>

```java
public java.lang.String getAddress4Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue"></a>

```java
public CustomerprofilesProfileBillingAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---


### CustomerprofilesProfileMailingAddressOutputReference <a name="CustomerprofilesProfileMailingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileMailingAddressOutputReference;

new CustomerprofilesProfileMailingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1"></a>

```java
public void resetAddress1()
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2"></a>

```java
public void resetAddress2()
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3"></a>

```java
public void resetAddress3()
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4"></a>

```java
public void resetAddress4()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1">address1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2">address2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3">address3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4">address4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input"></a>

```java
public java.lang.String getAddress1Input();
```

- *Type:* java.lang.String

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input"></a>

```java
public java.lang.String getAddress2Input();
```

- *Type:* java.lang.String

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input"></a>

```java
public java.lang.String getAddress3Input();
```

- *Type:* java.lang.String

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input"></a>

```java
public java.lang.String getAddress4Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue"></a>

```java
public CustomerprofilesProfileMailingAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---


### CustomerprofilesProfileShippingAddressOutputReference <a name="CustomerprofilesProfileShippingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_profile.CustomerprofilesProfileShippingAddressOutputReference;

new CustomerprofilesProfileShippingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1"></a>

```java
public void resetAddress1()
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2"></a>

```java
public void resetAddress2()
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3"></a>

```java
public void resetAddress3()
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4"></a>

```java
public void resetAddress4()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input">address1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input">address2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input">address3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input">address4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1">address1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2">address2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3">address3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4">address4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input"></a>

```java
public java.lang.String getAddress1Input();
```

- *Type:* java.lang.String

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input"></a>

```java
public java.lang.String getAddress2Input();
```

- *Type:* java.lang.String

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input"></a>

```java
public java.lang.String getAddress3Input();
```

- *Type:* java.lang.String

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input"></a>

```java
public java.lang.String getAddress4Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1"></a>

```java
public java.lang.String getAddress1();
```

- *Type:* java.lang.String

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2"></a>

```java
public java.lang.String getAddress2();
```

- *Type:* java.lang.String

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3"></a>

```java
public java.lang.String getAddress3();
```

- *Type:* java.lang.String

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4"></a>

```java
public java.lang.String getAddress4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue"></a>

```java
public CustomerprofilesProfileShippingAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---



