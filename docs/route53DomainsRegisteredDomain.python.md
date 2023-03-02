# `route53DomainsRegisteredDomain` Submodule <a name="`route53DomainsRegisteredDomain` Submodule" id="@cdktf/provider-aws.route53DomainsRegisteredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsRegisteredDomain <a name="Route53DomainsRegisteredDomain" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  admin_contact: Route53DomainsRegisteredDomainAdminContact = None,
  admin_privacy: typing.Union[bool, IResolvable] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name_server: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]] = None,
  registrant_contact: Route53DomainsRegisteredDomainRegistrantContact = None,
  registrant_privacy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tech_contact: Route53DomainsRegisteredDomainTechContact = None,
  tech_privacy: typing.Union[bool, IResolvable] = None,
  timeouts: Route53DomainsRegisteredDomainTimeouts = None,
  transfer_lock: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.nameServer">name_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]</code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techContact">tech_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `admin_contact`<sup>Optional</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `admin_privacy`<sup>Optional</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.adminPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.autoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_server`<sup>Optional</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.nameServer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `registrant_contact`<sup>Optional</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `registrant_privacy`<sup>Optional</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.registrantPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `tech_contact`<sup>Optional</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techContact"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `tech_privacy`<sup>Optional</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.techPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `transfer_lock`<sup>Optional</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.transferLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact">put_admin_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer">put_name_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact">put_registrant_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact">put_tech_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact">reset_admin_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy">reset_admin_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer">reset_name_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact">reset_registrant_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy">reset_registrant_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact">reset_tech_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy">reset_tech_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock">reset_transfer_lock</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_admin_contact` <a name="put_admin_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact"></a>

```python
def put_admin_contact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
) -> None
```

###### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

###### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

###### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.contactType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

###### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.extraParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

###### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.fax"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.organizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

###### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.zipCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

##### `put_name_server` <a name="put_name_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer"></a>

```python
def put_name_server(
  value: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]

---

##### `put_registrant_contact` <a name="put_registrant_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact"></a>

```python
def put_registrant_contact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
) -> None
```

###### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

###### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

###### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.contactType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

###### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.extraParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

###### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.fax"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.organizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

###### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.zipCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

##### `put_tech_contact` <a name="put_tech_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact"></a>

```python
def put_tech_contact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
) -> None
```

###### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

###### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

###### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.contactType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

###### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.extraParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

###### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.fax"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.organizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

###### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.zipCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

##### `reset_admin_contact` <a name="reset_admin_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact"></a>

```python
def reset_admin_contact() -> None
```

##### `reset_admin_privacy` <a name="reset_admin_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy"></a>

```python
def reset_admin_privacy() -> None
```

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_server` <a name="reset_name_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer"></a>

```python
def reset_name_server() -> None
```

##### `reset_registrant_contact` <a name="reset_registrant_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact"></a>

```python
def reset_registrant_contact() -> None
```

##### `reset_registrant_privacy` <a name="reset_registrant_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy"></a>

```python
def reset_registrant_privacy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tech_contact` <a name="reset_tech_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact"></a>

```python
def reset_tech_contact() -> None
```

##### `reset_tech_privacy` <a name="reset_tech_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy"></a>

```python
def reset_tech_privacy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transfer_lock` <a name="reset_transfer_lock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock"></a>

```python
def reset_transfer_lock() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail">abuse_contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone">abuse_contact_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer">name_server</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName">registrar_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl">registrar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller">reseller</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList">status_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact">tech_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate">updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer">whois_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput">admin_contact_input</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput">admin_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput">auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput">name_server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput">registrant_contact_input</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput">registrant_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput">tech_contact_input</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput">tech_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput">transfer_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abuse_contact_email`<sup>Required</sup> <a name="abuse_contact_email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail"></a>

```python
abuse_contact_email: str
```

- *Type:* str

---

##### `abuse_contact_phone`<sup>Required</sup> <a name="abuse_contact_phone" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone"></a>

```python
abuse_contact_phone: str
```

- *Type:* str

---

##### `admin_contact`<sup>Required</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact"></a>

```python
admin_contact: Route53DomainsRegisteredDomainAdminContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a>

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `name_server`<sup>Required</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer"></a>

```python
name_server: Route53DomainsRegisteredDomainNameServerList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a>

---

##### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact"></a>

```python
registrant_contact: Route53DomainsRegisteredDomainRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a>

---

##### `registrar_name`<sup>Required</sup> <a name="registrar_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName"></a>

```python
registrar_name: str
```

- *Type:* str

---

##### `registrar_url`<sup>Required</sup> <a name="registrar_url" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl"></a>

```python
registrar_url: str
```

- *Type:* str

---

##### `reseller`<sup>Required</sup> <a name="reseller" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller"></a>

```python
reseller: str
```

- *Type:* str

---

##### `status_list`<sup>Required</sup> <a name="status_list" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList"></a>

```python
status_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tech_contact`<sup>Required</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact"></a>

```python
tech_contact: Route53DomainsRegisteredDomainTechContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts"></a>

```python
timeouts: Route53DomainsRegisteredDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a>

---

##### `updated_date`<sup>Required</sup> <a name="updated_date" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate"></a>

```python
updated_date: str
```

- *Type:* str

---

##### `whois_server`<sup>Required</sup> <a name="whois_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer"></a>

```python
whois_server: str
```

- *Type:* str

---

##### `admin_contact_input`<sup>Optional</sup> <a name="admin_contact_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput"></a>

```python
admin_contact_input: Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `admin_privacy_input`<sup>Optional</sup> <a name="admin_privacy_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput"></a>

```python
admin_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput"></a>

```python
auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_server_input`<sup>Optional</sup> <a name="name_server_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput"></a>

```python
name_server_input: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]

---

##### `registrant_contact_input`<sup>Optional</sup> <a name="registrant_contact_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput"></a>

```python
registrant_contact_input: Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `registrant_privacy_input`<sup>Optional</sup> <a name="registrant_privacy_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput"></a>

```python
registrant_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tech_contact_input`<sup>Optional</sup> <a name="tech_contact_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput"></a>

```python
tech_contact_input: Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `tech_privacy_input`<sup>Optional</sup> <a name="tech_privacy_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput"></a>

```python
tech_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Route53DomainsRegisteredDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>, cdktf.IResolvable]

---

##### `transfer_lock_input`<sup>Optional</sup> <a name="transfer_lock_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput"></a>

```python
transfer_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_privacy`<sup>Required</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy"></a>

```python
admin_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registrant_privacy`<sup>Required</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy"></a>

```python
registrant_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tech_privacy`<sup>Required</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy"></a>

```python
tech_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transfer_lock`<sup>Required</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock"></a>

```python
transfer_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsRegisteredDomainAdminContact <a name="Route53DomainsRegisteredDomainAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainConfig <a name="Route53DomainsRegisteredDomainConfig" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  admin_contact: Route53DomainsRegisteredDomainAdminContact = None,
  admin_privacy: typing.Union[bool, IResolvable] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name_server: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]] = None,
  registrant_contact: Route53DomainsRegisteredDomainRegistrantContact = None,
  registrant_privacy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tech_contact: Route53DomainsRegisteredDomainTechContact = None,
  tech_privacy: typing.Union[bool, IResolvable] = None,
  timeouts: Route53DomainsRegisteredDomainTimeouts = None,
  transfer_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer">name_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]</code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact">tech_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `admin_contact`<sup>Optional</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact"></a>

```python
admin_contact: Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `admin_privacy`<sup>Optional</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy"></a>

```python
admin_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_server`<sup>Optional</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer"></a>

```python
name_server: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `registrant_contact`<sup>Optional</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact"></a>

```python
registrant_contact: Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `registrant_privacy`<sup>Optional</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy"></a>

```python
registrant_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `tech_contact`<sup>Optional</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact"></a>

```python
tech_contact: Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `tech_privacy`<sup>Optional</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy"></a>

```python
tech_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts"></a>

```python
timeouts: Route53DomainsRegisteredDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `transfer_lock`<sup>Optional</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock"></a>

```python
transfer_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

### Route53DomainsRegisteredDomainNameServer <a name="Route53DomainsRegisteredDomainNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer(
  name: str,
  glue_ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps">glue_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}.

---

##### `glue_ips`<sup>Optional</sup> <a name="glue_ips" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps"></a>

```python
glue_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}.

---

### Route53DomainsRegisteredDomainRegistrantContact <a name="Route53DomainsRegisteredDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTechContact <a name="Route53DomainsRegisteredDomainTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_params: typing.Mapping[str] = None,
  fax: str = None,
  first_name: str = None,
  last_name: str = None,
  organization_name: str = None,
  phone_number: str = None,
  state: str = None,
  zip_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `extra_params`<sup>Optional</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTimeouts <a name="Route53DomainsRegisteredDomainTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsRegisteredDomainAdminContactOutputReference <a name="Route53DomainsRegisteredDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams">reset_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_params` <a name="reset_extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams"></a>

```python
def reset_extra_params() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput">extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_params_input`<sup>Optional</sup> <a name="extra_params_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput"></a>

```python
extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `extra_params`<sup>Required</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue"></a>

```python
internal_value: Route53DomainsRegisteredDomainAdminContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---


### Route53DomainsRegisteredDomainNameServerList <a name="Route53DomainsRegisteredDomainNameServerList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsRegisteredDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsRegisteredDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>]]

---


### Route53DomainsRegisteredDomainNameServerOutputReference <a name="Route53DomainsRegisteredDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps">reset_glue_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glue_ips` <a name="reset_glue_ips" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps"></a>

```python
def reset_glue_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput">glue_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps">glue_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_ips_input`<sup>Optional</sup> <a name="glue_ips_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput"></a>

```python
glue_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `glue_ips`<sup>Required</sup> <a name="glue_ips" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps"></a>

```python
glue_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53DomainsRegisteredDomainNameServer, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer">Route53DomainsRegisteredDomainNameServer</a>, cdktf.IResolvable]

---


### Route53DomainsRegisteredDomainRegistrantContactOutputReference <a name="Route53DomainsRegisteredDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams">reset_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_params` <a name="reset_extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams"></a>

```python
def reset_extra_params() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput">extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_params_input`<sup>Optional</sup> <a name="extra_params_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput"></a>

```python
extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `extra_params`<sup>Required</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue"></a>

```python
internal_value: Route53DomainsRegisteredDomainRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---


### Route53DomainsRegisteredDomainTechContactOutputReference <a name="Route53DomainsRegisteredDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams">reset_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_params` <a name="reset_extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams"></a>

```python
def reset_extra_params() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput">extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams">extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_params_input`<sup>Optional</sup> <a name="extra_params_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput"></a>

```python
extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `extra_params`<sup>Required</sup> <a name="extra_params" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams"></a>

```python
extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue"></a>

```python
internal_value: Route53DomainsRegisteredDomainTechContact
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---


### Route53DomainsRegisteredDomainTimeoutsOutputReference <a name="Route53DomainsRegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_registered_domain

route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53DomainsRegisteredDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>, cdktf.IResolvable]

---



