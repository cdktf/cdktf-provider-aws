# `route53DomainsRegisteredDomain` Submodule <a name="`route53DomainsRegisteredDomain` Submodule" id="@cdktf/provider-aws.route53DomainsRegisteredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsRegisteredDomain <a name="Route53DomainsRegisteredDomain" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomain;

Route53DomainsRegisteredDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .adminContact(Route53DomainsRegisteredDomainAdminContact)
//  .adminPrivacy(java.lang.Boolean)
//  .adminPrivacy(IResolvable)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .id(java.lang.String)
//  .nameServer(IResolvable)
//  .nameServer(java.util.List<Route53DomainsRegisteredDomainNameServer>)
//  .registrantContact(Route53DomainsRegisteredDomainRegistrantContact)
//  .registrantPrivacy(java.lang.Boolean)
//  .registrantPrivacy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .techContact(Route53DomainsRegisteredDomainTechContact)
//  .techPrivacy(java.lang.Boolean)
//  .techPrivacy(IResolvable)
//  .timeouts(Route53DomainsRegisteredDomainTimeouts)
//  .transferLock(java.lang.Boolean)
//  .transferLock(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.nameServer">nameServer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>></code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.nameServer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>>

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techPrivacy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.transferLock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer">putNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact">putTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact">resetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy">resetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact">resetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy">resetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact">resetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy">resetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock">resetTransferLock</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact"></a>

```java
public void putAdminContact(Route53DomainsRegisteredDomainAdminContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `putNameServer` <a name="putNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer"></a>

```java
public void putNameServer(IResolvable OR java.util.List<Route53DomainsRegisteredDomainNameServer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>>

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact"></a>

```java
public void putRegistrantContact(Route53DomainsRegisteredDomainRegistrantContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `putTechContact` <a name="putTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact"></a>

```java
public void putTechContact(Route53DomainsRegisteredDomainTechContact value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts"></a>

```java
public void putTimeouts(Route53DomainsRegisteredDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

---

##### `resetAdminContact` <a name="resetAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact"></a>

```java
public void resetAdminContact()
```

##### `resetAdminPrivacy` <a name="resetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy"></a>

```java
public void resetAdminPrivacy()
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId"></a>

```java
public void resetId()
```

##### `resetNameServer` <a name="resetNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer"></a>

```java
public void resetNameServer()
```

##### `resetRegistrantContact` <a name="resetRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact"></a>

```java
public void resetRegistrantContact()
```

##### `resetRegistrantPrivacy` <a name="resetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy"></a>

```java
public void resetRegistrantPrivacy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTechContact` <a name="resetTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact"></a>

```java
public void resetTechContact()
```

##### `resetTechPrivacy` <a name="resetTechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy"></a>

```java
public void resetTechPrivacy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransferLock` <a name="resetTransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock"></a>

```java
public void resetTransferLock()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomain;

Route53DomainsRegisteredDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomain;

Route53DomainsRegisteredDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomain;

Route53DomainsRegisteredDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail">abuseContactEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone">abuseContactPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer">nameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName">registrarName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl">registrarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller">reseller</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList">statusList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate">updatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer">whoisServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput">adminContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput">adminPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput">nameServerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput">registrantContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput">registrantPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput">techContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput">techPrivacyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput">transferLockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abuseContactEmail`<sup>Required</sup> <a name="abuseContactEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail"></a>

```java
public java.lang.String getAbuseContactEmail();
```

- *Type:* java.lang.String

---

##### `abuseContactPhone`<sup>Required</sup> <a name="abuseContactPhone" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone"></a>

```java
public java.lang.String getAbuseContactPhone();
```

- *Type:* java.lang.String

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact"></a>

```java
public Route53DomainsRegisteredDomainAdminContactOutputReference getAdminContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer"></a>

```java
public Route53DomainsRegisteredDomainNameServerList getNameServer();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact"></a>

```java
public Route53DomainsRegisteredDomainRegistrantContactOutputReference getRegistrantContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a>

---

##### `registrarName`<sup>Required</sup> <a name="registrarName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName"></a>

```java
public java.lang.String getRegistrarName();
```

- *Type:* java.lang.String

---

##### `registrarUrl`<sup>Required</sup> <a name="registrarUrl" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl"></a>

```java
public java.lang.String getRegistrarUrl();
```

- *Type:* java.lang.String

---

##### `reseller`<sup>Required</sup> <a name="reseller" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller"></a>

```java
public java.lang.String getReseller();
```

- *Type:* java.lang.String

---

##### `statusList`<sup>Required</sup> <a name="statusList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList"></a>

```java
public java.util.List<java.lang.String> getStatusList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `techContact`<sup>Required</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact"></a>

```java
public Route53DomainsRegisteredDomainTechContactOutputReference getTechContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts"></a>

```java
public Route53DomainsRegisteredDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a>

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate"></a>

```java
public java.lang.String getUpdatedDate();
```

- *Type:* java.lang.String

---

##### `whoisServer`<sup>Required</sup> <a name="whoisServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer"></a>

```java
public java.lang.String getWhoisServer();
```

- *Type:* java.lang.String

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput"></a>

```java
public Route53DomainsRegisteredDomainAdminContact getAdminContactInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `adminPrivacyInput`<sup>Optional</sup> <a name="adminPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput"></a>

```java
public java.lang.Object getAdminPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput"></a>

```java
public java.lang.Object getAutoRenewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput"></a>

```java
public java.lang.Object getNameServerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>>

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput"></a>

```java
public Route53DomainsRegisteredDomainRegistrantContact getRegistrantContactInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `registrantPrivacyInput`<sup>Optional</sup> <a name="registrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput"></a>

```java
public java.lang.Object getRegistrantPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `techContactInput`<sup>Optional</sup> <a name="techContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput"></a>

```java
public Route53DomainsRegisteredDomainTechContact getTechContactInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `techPrivacyInput`<sup>Optional</sup> <a name="techPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput"></a>

```java
public java.lang.Object getTechPrivacyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `transferLockInput`<sup>Optional</sup> <a name="transferLockInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput"></a>

```java
public java.lang.Object getTransferLockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminPrivacy`<sup>Required</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy"></a>

```java
public java.lang.Object getAdminPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `registrantPrivacy`<sup>Required</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy"></a>

```java
public java.lang.Object getRegistrantPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `techPrivacy`<sup>Required</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy"></a>

```java
public java.lang.Object getTechPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transferLock`<sup>Required</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock"></a>

```java
public java.lang.Object getTransferLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsRegisteredDomainAdminContact <a name="Route53DomainsRegisteredDomainAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainAdminContact;

Route53DomainsRegisteredDomainAdminContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParams(java.util.Map<java.lang.String, java.lang.String>)
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainConfig <a name="Route53DomainsRegisteredDomainConfig" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainConfig;

Route53DomainsRegisteredDomainConfig.builder()
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
    .domainName(java.lang.String)
//  .adminContact(Route53DomainsRegisteredDomainAdminContact)
//  .adminPrivacy(java.lang.Boolean)
//  .adminPrivacy(IResolvable)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .id(java.lang.String)
//  .nameServer(IResolvable)
//  .nameServer(java.util.List<Route53DomainsRegisteredDomainNameServer>)
//  .registrantContact(Route53DomainsRegisteredDomainRegistrantContact)
//  .registrantPrivacy(java.lang.Boolean)
//  .registrantPrivacy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .techContact(Route53DomainsRegisteredDomainTechContact)
//  .techPrivacy(java.lang.Boolean)
//  .techPrivacy(IResolvable)
//  .timeouts(Route53DomainsRegisteredDomainTimeouts)
//  .transferLock(java.lang.Boolean)
//  .transferLock(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy">adminPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer">nameServer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>></code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy">registrantPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact">techContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy">techPrivacy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock">transferLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `adminContact`<sup>Optional</sup> <a name="adminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact"></a>

```java
public Route53DomainsRegisteredDomainAdminContact getAdminContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `adminPrivacy`<sup>Optional</sup> <a name="adminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy"></a>

```java
public java.lang.Object getAdminPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer"></a>

```java
public java.lang.Object getNameServer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>>

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `registrantContact`<sup>Optional</sup> <a name="registrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact"></a>

```java
public Route53DomainsRegisteredDomainRegistrantContact getRegistrantContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="registrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy"></a>

```java
public java.lang.Object getRegistrantPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `techContact`<sup>Optional</sup> <a name="techContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact"></a>

```java
public Route53DomainsRegisteredDomainTechContact getTechContact();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `techPrivacy`<sup>Optional</sup> <a name="techPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy"></a>

```java
public java.lang.Object getTechPrivacy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts"></a>

```java
public Route53DomainsRegisteredDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `transferLock`<sup>Optional</sup> <a name="transferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock"></a>

```java
public java.lang.Object getTransferLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

### Route53DomainsRegisteredDomainNameServer <a name="Route53DomainsRegisteredDomainNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainNameServer;

Route53DomainsRegisteredDomainNameServer.builder()
    .name(java.lang.String)
//  .glueIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps">glueIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}.

---

##### `glueIps`<sup>Optional</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps"></a>

```java
public java.util.List<java.lang.String> getGlueIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}.

---

### Route53DomainsRegisteredDomainRegistrantContact <a name="Route53DomainsRegisteredDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainRegistrantContact;

Route53DomainsRegisteredDomainRegistrantContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParams(java.util.Map<java.lang.String, java.lang.String>)
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTechContact <a name="Route53DomainsRegisteredDomainTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainTechContact;

Route53DomainsRegisteredDomainTechContact.builder()
//  .addressLine1(java.lang.String)
//  .addressLine2(java.lang.String)
//  .city(java.lang.String)
//  .contactType(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .extraParams(java.util.Map<java.lang.String, java.lang.String>)
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
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType">contactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax">fax</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contactType`<sup>Optional</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extraParams`<sup>Optional</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTimeouts <a name="Route53DomainsRegisteredDomainTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainTimeouts;

Route53DomainsRegisteredDomainTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsRegisteredDomainAdminContactOutputReference <a name="Route53DomainsRegisteredDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainAdminContactOutputReference;

new Route53DomainsRegisteredDomainAdminContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams"></a>

```java
public void resetExtraParams()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue"></a>

```java
public Route53DomainsRegisteredDomainAdminContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---


### Route53DomainsRegisteredDomainNameServerList <a name="Route53DomainsRegisteredDomainNameServerList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainNameServerList;

new Route53DomainsRegisteredDomainNameServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get"></a>

```java
public Route53DomainsRegisteredDomainNameServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>>

---


### Route53DomainsRegisteredDomainNameServerOutputReference <a name="Route53DomainsRegisteredDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainNameServerOutputReference;

new Route53DomainsRegisteredDomainNameServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps">resetGlueIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueIps` <a name="resetGlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps"></a>

```java
public void resetGlueIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput">glueIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps">glueIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueIpsInput`<sup>Optional</sup> <a name="glueIpsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput"></a>

```java
public java.util.List<java.lang.String> getGlueIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `glueIps`<sup>Required</sup> <a name="glueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps"></a>

```java
public java.util.List<java.lang.String> getGlueIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a> OR com.hashicorp.cdktf.IResolvable

---


### Route53DomainsRegisteredDomainRegistrantContactOutputReference <a name="Route53DomainsRegisteredDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainRegistrantContactOutputReference;

new Route53DomainsRegisteredDomainRegistrantContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams"></a>

```java
public void resetExtraParams()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue"></a>

```java
public Route53DomainsRegisteredDomainRegistrantContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---


### Route53DomainsRegisteredDomainTechContactOutputReference <a name="Route53DomainsRegisteredDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainTechContactOutputReference;

new Route53DomainsRegisteredDomainTechContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType">resetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams">resetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1"></a>

```java
public void resetAddressLine1()
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2"></a>

```java
public void resetAddressLine2()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetContactType` <a name="resetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType"></a>

```java
public void resetContactType()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetExtraParams` <a name="resetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams"></a>

```java
public void resetExtraParams()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax"></a>

```java
public void resetFax()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode"></a>

```java
public void resetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput">contactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput">extraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType">contactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams">extraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input"></a>

```java
public java.lang.String getAddressLine1Input();
```

- *Type:* java.lang.String

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input"></a>

```java
public java.lang.String getAddressLine2Input();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `contactTypeInput`<sup>Optional</sup> <a name="contactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput"></a>

```java
public java.lang.String getContactTypeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `extraParamsInput`<sup>Optional</sup> <a name="extraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `contactType`<sup>Required</sup> <a name="contactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType"></a>

```java
public java.lang.String getContactType();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `extraParams`<sup>Required</sup> <a name="extraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue"></a>

```java
public Route53DomainsRegisteredDomainTechContact getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---


### Route53DomainsRegisteredDomainTimeoutsOutputReference <a name="Route53DomainsRegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_domains_registered_domain.Route53DomainsRegisteredDomainTimeoutsOutputReference;

new Route53DomainsRegisteredDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



