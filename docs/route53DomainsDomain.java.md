# `route53DomainsDomain` Submodule <a name="`route53DomainsDomain` Submodule" id="@cdktf/provider-aws.route53DomainsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDomain <a name="Route53DomainsDomain" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain aws_route53domains_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomain;

Route53DomainsDomain.Builder.create(Construct scope, java.lang.String id)
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
//  .adminContact(IResolvable)
//  .adminContact(java.util.List<Route53DomainsDomainAdminContact>)
//  .adminPrivacy(java.lang.Boolean)
//  .adminPrivacy(IResolvable)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .billingContact(IResolvable)
//  .billingContact(java.util.List<Route53DomainsDomainBillingContact>)
//  .billingPrivacy(java.lang.Boolean)
//  .billingPrivacy(IResolvable)
//  .durationInYears(java.lang.Number)
//  .nameServer(IResolvable)
//  .nameServer(java.util.List<Route53DomainsDomainNameServer>)
//  .registrantContact(IResolvable)
//  .registrantContact(java.util.List<Route53DomainsDomainRegistrantContact>)
//  .registrantPrivacy(java.lang.Boolean)
//  .registrantPrivacy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .techContact(IResolvable)
//  .techContact(java.util.List<Route53DomainsDomainTechContact>)
//  .techPrivacy(java.lang.Boolean)
//  .techPrivacy(IResolvable)
//  .timeouts(Route53DomainsDomainTimeouts)
//  .transferLock(java.lang.Boolean)
//  .transferLock(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminContact">adminContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingContact">billingContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingPrivacy">billingPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.durationInYears">durationInYears</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.nameServer">nameServer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantContact">registrantContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techContact">techContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminContact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `billingContact`<sup>Optional</sup> <a name="billingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingContact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `billingPrivacy`<sup>Optional</sup> <a name="billingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `durationInYears`<sup>Optional</sup> <a name="durationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.durationInYears"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.nameServer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantContact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techContact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>>

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.transferLock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact">putBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer">putNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact">putTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact">resetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy">resetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact">resetBillingContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy">resetBillingPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears">resetDurationInYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact">resetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy">resetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact">resetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy">resetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock">resetTransferLock</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact"></a>

```java
public void putAdminContact(IResolvable OR java.util.List<Route53DomainsDomainAdminContact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>>

---

##### `putBillingContact` <a name="putBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact"></a>

```java
public void putBillingContact(IResolvable OR java.util.List<Route53DomainsDomainBillingContact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>>

---

##### `putNameServer` <a name="putNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer"></a>

```java
public void putNameServer(IResolvable OR java.util.List<Route53DomainsDomainNameServer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>>

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact"></a>

```java
public void putRegistrantContact(IResolvable OR java.util.List<Route53DomainsDomainRegistrantContact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>>

---

##### `putTechContact` <a name="putTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact"></a>

```java
public void putTechContact(IResolvable OR java.util.List<Route53DomainsDomainTechContact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts"></a>

```java
public void putTimeouts(Route53DomainsDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---

##### `resetAdminContact` <a name="resetAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact"></a>

```java
public void resetAdminContact()
```

##### `resetAdminPrivacy` <a name="resetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy"></a>

```java
public void resetAdminPrivacy()
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetBillingContact` <a name="resetBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact"></a>

```java
public void resetBillingContact()
```

##### `resetBillingPrivacy` <a name="resetBillingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy"></a>

```java
public void resetBillingPrivacy()
```

##### `resetDurationInYears` <a name="resetDurationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears"></a>

```java
public void resetDurationInYears()
```

##### `resetNameServer` <a name="resetNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer"></a>

```java
public void resetNameServer()
```

##### `resetRegistrantContact` <a name="resetRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact"></a>

```java
public void resetRegistrantContact()
```

##### `resetRegistrantPrivacy` <a name="resetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy"></a>

```java
public void resetRegistrantPrivacy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTechContact` <a name="resetTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact"></a>

```java
public void resetTechContact()
```

##### `resetTechPrivacy` <a name="resetTechPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy"></a>

```java
public void resetTechPrivacy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransferLock` <a name="resetTransferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock"></a>

```java
public void resetTransferLock()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomain;

Route53DomainsDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomain;

Route53DomainsDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomain;

Route53DomainsDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomain;

Route53DomainsDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53DomainsDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53DomainsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53DomainsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail">abuseContactEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone">abuseContactPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact">billingContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer">nameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName">registrarName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl">registrarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList">statusList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate">updatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer">whoisServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput">adminContactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput">adminPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput">billingContactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput">billingPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput">durationInYearsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput">nameServerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput">registrantContactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput">registrantPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput">techContactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput">techPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput">transferLockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy">billingPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears">durationInYears</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abuseContactEmail`<sup>Required</sup> <a name="abuseContactEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail"></a>

```java
public java.lang.String getAbuseContactEmail();
```

- *Type:* java.lang.String

---

##### `abuseContactPhone`<sup>Required</sup> <a name="abuseContactPhone" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone"></a>

```java
public java.lang.String getAbuseContactPhone();
```

- *Type:* java.lang.String

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact"></a>

```java
public Route53DomainsDomainAdminContactList getAdminContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a>

---

##### `billingContact`<sup>Required</sup> <a name="billingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact"></a>

```java
public Route53DomainsDomainBillingContactList getBillingContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer"></a>

```java
public Route53DomainsDomainNameServerList getNameServer();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact"></a>

```java
public Route53DomainsDomainRegistrantContactList getRegistrantContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a>

---

##### `registrarName`<sup>Required</sup> <a name="registrarName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName"></a>

```java
public java.lang.String getRegistrarName();
```

- *Type:* java.lang.String

---

##### `registrarUrl`<sup>Required</sup> <a name="registrarUrl" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl"></a>

```java
public java.lang.String getRegistrarUrl();
```

- *Type:* java.lang.String

---

##### `statusList`<sup>Required</sup> <a name="statusList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList"></a>

```java
public java.util.List<java.lang.String> getStatusList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `techContact`<sup>Required</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact"></a>

```java
public Route53DomainsDomainTechContactList getTechContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts"></a>

```java
public Route53DomainsDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a>

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate"></a>

```java
public java.lang.String getUpdatedDate();
```

- *Type:* java.lang.String

---

##### `whoisServer`<sup>Required</sup> <a name="whoisServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer"></a>

```java
public java.lang.String getWhoisServer();
```

- *Type:* java.lang.String

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput"></a>

```java
public java.lang.Object getAdminContactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>>

---

##### `adminPrivacyInput`<sup>Optional</sup> <a name="adminPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput"></a>

```java
public java.lang.Object getAdminPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput"></a>

```java
public java.lang.Object getAutoRenewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `billingContactInput`<sup>Optional</sup> <a name="billingContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput"></a>

```java
public java.lang.Object getBillingContactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>>

---

##### `billingPrivacyInput`<sup>Optional</sup> <a name="billingPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput"></a>

```java
public java.lang.Object getBillingPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `durationInYearsInput`<sup>Optional</sup> <a name="durationInYearsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput"></a>

```java
public java.lang.Number getDurationInYearsInput();
```

- *Type:* java.lang.Number

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput"></a>

```java
public java.lang.Object getNameServerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>>

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput"></a>

```java
public java.lang.Object getRegistrantContactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>>

---

##### `registrantPrivacyInput`<sup>Optional</sup> <a name="registrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput"></a>

```java
public java.lang.Object getRegistrantPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `techContactInput`<sup>Optional</sup> <a name="techContactInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput"></a>

```java
public java.lang.Object getTechContactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>>

---

##### `techPrivacyInput`<sup>Optional</sup> <a name="techPrivacyInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput"></a>

```java
public java.lang.Object getTechPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---

##### `transferLockInput`<sup>Optional</sup> <a name="transferLockInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput"></a>

```java
public java.lang.Object getTransferLockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminPrivacy`<sup>Required</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy"></a>

```java
public java.lang.Object getAdminPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `billingPrivacy`<sup>Required</sup> <a name="billingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy"></a>

```java
public java.lang.Object getBillingPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `durationInYears`<sup>Required</sup> <a name="durationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears"></a>

```java
public java.lang.Number getDurationInYears();
```

- *Type:* java.lang.Number

---

##### `registrantPrivacy`<sup>Required</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy"></a>

```java
public java.lang.Object getRegistrantPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `techPrivacy`<sup>Required</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy"></a>

```java
public java.lang.Object getTechPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transferLock`<sup>Required</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock"></a>

```java
public java.lang.Object getTransferLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDomainAdminContact <a name="Route53DomainsDomainAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContact;

Route53DomainsDomainAdminContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParam(IResolvable)
//  .extraParam(java.util.List<Route53DomainsDomainAdminContactExtraParam>)
//  .fax(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .organizationName(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .state(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam">extraParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>></code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam"></a>

```java
public java.lang.Object getExtraParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>>

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainAdminContactExtraParam <a name="Route53DomainsDomainAdminContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContactExtraParam;

Route53DomainsDomainAdminContactExtraParam.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainBillingContact <a name="Route53DomainsDomainBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContact;

Route53DomainsDomainBillingContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParam(IResolvable)
//  .extraParam(java.util.List<Route53DomainsDomainBillingContactExtraParam>)
//  .fax(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .organizationName(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .state(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam">extraParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam"></a>

```java
public java.lang.Object getExtraParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainBillingContactExtraParam <a name="Route53DomainsDomainBillingContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContactExtraParam;

Route53DomainsDomainBillingContactExtraParam.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainConfig <a name="Route53DomainsDomainConfig" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainConfig;

Route53DomainsDomainConfig.builder()
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
//  .adminContact(IResolvable)
//  .adminContact(java.util.List<Route53DomainsDomainAdminContact>)
//  .adminPrivacy(java.lang.Boolean)
//  .adminPrivacy(IResolvable)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .billingContact(IResolvable)
//  .billingContact(java.util.List<Route53DomainsDomainBillingContact>)
//  .billingPrivacy(java.lang.Boolean)
//  .billingPrivacy(IResolvable)
//  .durationInYears(java.lang.Number)
//  .nameServer(IResolvable)
//  .nameServer(java.util.List<Route53DomainsDomainNameServer>)
//  .registrantContact(IResolvable)
//  .registrantContact(java.util.List<Route53DomainsDomainRegistrantContact>)
//  .registrantPrivacy(java.lang.Boolean)
//  .registrantPrivacy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .techContact(IResolvable)
//  .techContact(java.util.List<Route53DomainsDomainTechContact>)
//  .techPrivacy(java.lang.Boolean)
//  .techPrivacy(IResolvable)
//  .timeouts(Route53DomainsDomainTimeouts)
//  .transferLock(java.lang.Boolean)
//  .transferLock(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact">adminContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact">billingContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy">billingPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears">durationInYears</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer">nameServer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact">registrantContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact">techContact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact"></a>

```java
public java.lang.Object getAdminContact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy"></a>

```java
public java.lang.Object getAdminPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `billingContact`<sup>Optional</sup> <a name="billingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact"></a>

```java
public java.lang.Object getBillingContact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `billingPrivacy`<sup>Optional</sup> <a name="billingPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy"></a>

```java
public java.lang.Object getBillingPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `durationInYears`<sup>Optional</sup> <a name="durationInYears" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears"></a>

```java
public java.lang.Number getDurationInYears();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer"></a>

```java
public java.lang.Object getNameServer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact"></a>

```java
public java.lang.Object getRegistrantContact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy"></a>

```java
public java.lang.Object getRegistrantPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact"></a>

```java
public java.lang.Object getTechContact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>>

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy"></a>

```java
public java.lang.Object getTechPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts"></a>

```java
public Route53DomainsDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock"></a>

```java
public java.lang.Object getTransferLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

### Route53DomainsDomainNameServer <a name="Route53DomainsDomainNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainNameServer;

Route53DomainsDomainNameServer.builder()
//  .glueIps(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps">glueIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |

---

##### `glueIps`<sup>Optional</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps"></a>

```java
public java.util.List<java.lang.String> getGlueIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

### Route53DomainsDomainRegistrantContact <a name="Route53DomainsDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContact;

Route53DomainsDomainRegistrantContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParam(IResolvable)
//  .extraParam(java.util.List<Route53DomainsDomainRegistrantContactExtraParam>)
//  .fax(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .organizationName(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .state(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam">extraParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>></code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam"></a>

```java
public java.lang.Object getExtraParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>>

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainRegistrantContactExtraParam <a name="Route53DomainsDomainRegistrantContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContactExtraParam;

Route53DomainsDomainRegistrantContactExtraParam.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTechContact <a name="Route53DomainsDomainTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContact;

Route53DomainsDomainTechContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParam(IResolvable)
//  .extraParam(java.util.List<Route53DomainsDomainTechContactExtraParam>)
//  .fax(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .organizationName(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .state(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam">extraParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>></code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extraParam`<sup>Optional</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam"></a>

```java
public java.lang.Object getExtraParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>>

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainTechContactExtraParam <a name="Route53DomainsDomainTechContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContactExtraParam;

Route53DomainsDomainTechContactExtraParam.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTimeouts <a name="Route53DomainsDomainTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTimeouts;

Route53DomainsDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDomainAdminContactExtraParamList <a name="Route53DomainsDomainAdminContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContactExtraParamList;

new Route53DomainsDomainAdminContactExtraParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get"></a>

```java
public Route53DomainsDomainAdminContactExtraParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>>

---


### Route53DomainsDomainAdminContactExtraParamOutputReference <a name="Route53DomainsDomainAdminContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContactExtraParamOutputReference;

new Route53DomainsDomainAdminContactExtraParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>

---


### Route53DomainsDomainAdminContactList <a name="Route53DomainsDomainAdminContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContactList;

new Route53DomainsDomainAdminContactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get"></a>

```java
public Route53DomainsDomainAdminContactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>>

---


### Route53DomainsDomainAdminContactOutputReference <a name="Route53DomainsDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainAdminContactOutputReference;

new Route53DomainsDomainAdminContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam"></a>

```java
public void putExtraParam(IResolvable OR java.util.List<Route53DomainsDomainAdminContactExtraParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>>

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam"></a>

```java
public void resetExtraParam()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam"></a>

```java
public Route53DomainsDomainAdminContactExtraParamList getExtraParam();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput"></a>

```java
public java.lang.Object getExtraParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>

---


### Route53DomainsDomainBillingContactExtraParamList <a name="Route53DomainsDomainBillingContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContactExtraParamList;

new Route53DomainsDomainBillingContactExtraParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get"></a>

```java
public Route53DomainsDomainBillingContactExtraParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>>

---


### Route53DomainsDomainBillingContactExtraParamOutputReference <a name="Route53DomainsDomainBillingContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContactExtraParamOutputReference;

new Route53DomainsDomainBillingContactExtraParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>

---


### Route53DomainsDomainBillingContactList <a name="Route53DomainsDomainBillingContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContactList;

new Route53DomainsDomainBillingContactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get"></a>

```java
public Route53DomainsDomainBillingContactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>>

---


### Route53DomainsDomainBillingContactOutputReference <a name="Route53DomainsDomainBillingContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainBillingContactOutputReference;

new Route53DomainsDomainBillingContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam"></a>

```java
public void putExtraParam(IResolvable OR java.util.List<Route53DomainsDomainBillingContactExtraParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>>

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam"></a>

```java
public void resetExtraParam()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam"></a>

```java
public Route53DomainsDomainBillingContactExtraParamList getExtraParam();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput"></a>

```java
public java.lang.Object getExtraParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>

---


### Route53DomainsDomainNameServerList <a name="Route53DomainsDomainNameServerList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainNameServerList;

new Route53DomainsDomainNameServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get"></a>

```java
public Route53DomainsDomainNameServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>>

---


### Route53DomainsDomainNameServerOutputReference <a name="Route53DomainsDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainNameServerOutputReference;

new Route53DomainsDomainNameServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps">resetGlueIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueIps` <a name="resetGlueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps"></a>

```java
public void resetGlueIps()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput">glueIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps">glueIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueIpsInput`<sup>Optional</sup> <a name="glueIpsInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput"></a>

```java
public java.util.List<java.lang.String> getGlueIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `glueIps`<sup>Required</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps"></a>

```java
public java.util.List<java.lang.String> getGlueIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>

---


### Route53DomainsDomainRegistrantContactExtraParamList <a name="Route53DomainsDomainRegistrantContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContactExtraParamList;

new Route53DomainsDomainRegistrantContactExtraParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get"></a>

```java
public Route53DomainsDomainRegistrantContactExtraParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>>

---


### Route53DomainsDomainRegistrantContactExtraParamOutputReference <a name="Route53DomainsDomainRegistrantContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContactExtraParamOutputReference;

new Route53DomainsDomainRegistrantContactExtraParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>

---


### Route53DomainsDomainRegistrantContactList <a name="Route53DomainsDomainRegistrantContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContactList;

new Route53DomainsDomainRegistrantContactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get"></a>

```java
public Route53DomainsDomainRegistrantContactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>>

---


### Route53DomainsDomainRegistrantContactOutputReference <a name="Route53DomainsDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainRegistrantContactOutputReference;

new Route53DomainsDomainRegistrantContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam"></a>

```java
public void putExtraParam(IResolvable OR java.util.List<Route53DomainsDomainRegistrantContactExtraParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>>

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam"></a>

```java
public void resetExtraParam()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam"></a>

```java
public Route53DomainsDomainRegistrantContactExtraParamList getExtraParam();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput"></a>

```java
public java.lang.Object getExtraParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>

---


### Route53DomainsDomainTechContactExtraParamList <a name="Route53DomainsDomainTechContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContactExtraParamList;

new Route53DomainsDomainTechContactExtraParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get"></a>

```java
public Route53DomainsDomainTechContactExtraParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>>

---


### Route53DomainsDomainTechContactExtraParamOutputReference <a name="Route53DomainsDomainTechContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContactExtraParamOutputReference;

new Route53DomainsDomainTechContactExtraParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>

---


### Route53DomainsDomainTechContactList <a name="Route53DomainsDomainTechContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContactList;

new Route53DomainsDomainTechContactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get"></a>

```java
public Route53DomainsDomainTechContactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>>

---


### Route53DomainsDomainTechContactOutputReference <a name="Route53DomainsDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTechContactOutputReference;

new Route53DomainsDomainTechContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam">putExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam">resetExtraParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParam` <a name="putExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam"></a>

```java
public void putExtraParam(IResolvable OR java.util.List<Route53DomainsDomainTechContactExtraParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>>

---

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParam` <a name="resetExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam"></a>

```java
public void resetExtraParam()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam">extraParam</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput">extraParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extraParam`<sup>Required</sup> <a name="extraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam"></a>

```java
public Route53DomainsDomainTechContactExtraParamList getExtraParam();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a>

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamInput`<sup>Optional</sup> <a name="extraParamInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput"></a>

```java
public java.lang.Object getExtraParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>

---


### Route53DomainsDomainTimeoutsOutputReference <a name="Route53DomainsDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_domain.Route53DomainsDomainTimeoutsOutputReference;

new Route53DomainsDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

---



