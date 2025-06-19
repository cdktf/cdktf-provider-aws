# `route53DomainsDomain` Submodule <a name="`route53DomainsDomain` Submodule" id="@cdktf/provider-aws.route53DomainsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDomain <a name="Route53DomainsDomain" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain aws_route53domains_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  admin_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]] = None,
  admin_privacy: typing.Union[bool, IResolvable] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  billing_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]] = None,
  billing_privacy: typing.Union[bool, IResolvable] = None,
  duration_in_years: typing.Union[int, float] = None,
  name_server: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]] = None,
  registrant_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]] = None,
  registrant_privacy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tech_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]] = None,
  tech_privacy: typing.Union[bool, IResolvable] = None,
  timeouts: Route53DomainsDomainTimeouts = None,
  transfer_lock: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminContact">admin_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]</code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingContact">billing_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingPrivacy">billing_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.durationInYears">duration_in_years</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.nameServer">name_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantContact">registrant_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]</code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techContact">tech_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]</code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `admin_contact`<sup>Optional</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminContact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `admin_privacy`<sup>Optional</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.adminPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.autoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `billing_contact`<sup>Optional</sup> <a name="billing_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingContact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `billing_privacy`<sup>Optional</sup> <a name="billing_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.billingPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `duration_in_years`<sup>Optional</sup> <a name="duration_in_years" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.durationInYears"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `name_server`<sup>Optional</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.nameServer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `registrant_contact`<sup>Optional</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantContact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `registrant_privacy`<sup>Optional</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.registrantPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `tech_contact`<sup>Optional</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techContact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `tech_privacy`<sup>Optional</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.techPrivacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `transfer_lock`<sup>Optional</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.Initializer.parameter.transferLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact">put_admin_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact">put_billing_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer">put_name_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact">put_registrant_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact">put_tech_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact">reset_admin_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy">reset_admin_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact">reset_billing_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy">reset_billing_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears">reset_duration_in_years</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer">reset_name_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact">reset_registrant_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy">reset_registrant_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact">reset_tech_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy">reset_tech_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock">reset_transfer_lock</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admin_contact` <a name="put_admin_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact"></a>

```python
def put_admin_contact(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putAdminContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]

---

##### `put_billing_contact` <a name="put_billing_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact"></a>

```python
def put_billing_contact(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putBillingContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]

---

##### `put_name_server` <a name="put_name_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer"></a>

```python
def put_name_server(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putNameServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]

---

##### `put_registrant_contact` <a name="put_registrant_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact"></a>

```python
def put_registrant_contact(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putRegistrantContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]

---

##### `put_tech_contact` <a name="put_tech_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact"></a>

```python
def put_tech_contact(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTechContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}

---

##### `reset_admin_contact` <a name="reset_admin_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminContact"></a>

```python
def reset_admin_contact() -> None
```

##### `reset_admin_privacy` <a name="reset_admin_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAdminPrivacy"></a>

```python
def reset_admin_privacy() -> None
```

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_billing_contact` <a name="reset_billing_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingContact"></a>

```python
def reset_billing_contact() -> None
```

##### `reset_billing_privacy` <a name="reset_billing_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetBillingPrivacy"></a>

```python
def reset_billing_privacy() -> None
```

##### `reset_duration_in_years` <a name="reset_duration_in_years" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetDurationInYears"></a>

```python
def reset_duration_in_years() -> None
```

##### `reset_name_server` <a name="reset_name_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetNameServer"></a>

```python
def reset_name_server() -> None
```

##### `reset_registrant_contact` <a name="reset_registrant_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantContact"></a>

```python
def reset_registrant_contact() -> None
```

##### `reset_registrant_privacy` <a name="reset_registrant_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetRegistrantPrivacy"></a>

```python
def reset_registrant_privacy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tech_contact` <a name="reset_tech_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechContact"></a>

```python
def reset_tech_contact() -> None
```

##### `reset_tech_privacy` <a name="reset_tech_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTechPrivacy"></a>

```python
def reset_tech_privacy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transfer_lock` <a name="reset_transfer_lock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.resetTransferLock"></a>

```python
def reset_transfer_lock() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53DomainsDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53DomainsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail">abuse_contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone">abuse_contact_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact">admin_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact">billing_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer">name_server</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName">registrar_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl">registrar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList">status_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact">tech_contact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate">updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer">whois_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput">admin_contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput">admin_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput">auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput">billing_contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput">billing_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput">duration_in_years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput">name_server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput">registrant_contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput">registrant_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput">tech_contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput">tech_privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput">transfer_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy">billing_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears">duration_in_years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abuse_contact_email`<sup>Required</sup> <a name="abuse_contact_email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactEmail"></a>

```python
abuse_contact_email: str
```

- *Type:* str

---

##### `abuse_contact_phone`<sup>Required</sup> <a name="abuse_contact_phone" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.abuseContactPhone"></a>

```python
abuse_contact_phone: str
```

- *Type:* str

---

##### `admin_contact`<sup>Required</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContact"></a>

```python
admin_contact: Route53DomainsDomainAdminContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList">Route53DomainsDomainAdminContactList</a>

---

##### `billing_contact`<sup>Required</sup> <a name="billing_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContact"></a>

```python
billing_contact: Route53DomainsDomainBillingContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList">Route53DomainsDomainBillingContactList</a>

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `name_server`<sup>Required</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServer"></a>

```python
name_server: Route53DomainsDomainNameServerList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList">Route53DomainsDomainNameServerList</a>

---

##### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContact"></a>

```python
registrant_contact: Route53DomainsDomainRegistrantContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList">Route53DomainsDomainRegistrantContactList</a>

---

##### `registrar_name`<sup>Required</sup> <a name="registrar_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarName"></a>

```python
registrar_name: str
```

- *Type:* str

---

##### `registrar_url`<sup>Required</sup> <a name="registrar_url" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrarUrl"></a>

```python
registrar_url: str
```

- *Type:* str

---

##### `status_list`<sup>Required</sup> <a name="status_list" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.statusList"></a>

```python
status_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tech_contact`<sup>Required</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContact"></a>

```python
tech_contact: Route53DomainsDomainTechContactList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList">Route53DomainsDomainTechContactList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeouts"></a>

```python
timeouts: Route53DomainsDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference">Route53DomainsDomainTimeoutsOutputReference</a>

---

##### `updated_date`<sup>Required</sup> <a name="updated_date" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.updatedDate"></a>

```python
updated_date: str
```

- *Type:* str

---

##### `whois_server`<sup>Required</sup> <a name="whois_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.whoisServer"></a>

```python
whois_server: str
```

- *Type:* str

---

##### `admin_contact_input`<sup>Optional</sup> <a name="admin_contact_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminContactInput"></a>

```python
admin_contact_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]

---

##### `admin_privacy_input`<sup>Optional</sup> <a name="admin_privacy_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacyInput"></a>

```python
admin_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenewInput"></a>

```python
auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_contact_input`<sup>Optional</sup> <a name="billing_contact_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingContactInput"></a>

```python
billing_contact_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]

---

##### `billing_privacy_input`<sup>Optional</sup> <a name="billing_privacy_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacyInput"></a>

```python
billing_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `duration_in_years_input`<sup>Optional</sup> <a name="duration_in_years_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYearsInput"></a>

```python
duration_in_years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_server_input`<sup>Optional</sup> <a name="name_server_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.nameServerInput"></a>

```python
name_server_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]

---

##### `registrant_contact_input`<sup>Optional</sup> <a name="registrant_contact_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantContactInput"></a>

```python
registrant_contact_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]

---

##### `registrant_privacy_input`<sup>Optional</sup> <a name="registrant_privacy_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacyInput"></a>

```python
registrant_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tech_contact_input`<sup>Optional</sup> <a name="tech_contact_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techContactInput"></a>

```python
tech_contact_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]

---

##### `tech_privacy_input`<sup>Optional</sup> <a name="tech_privacy_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacyInput"></a>

```python
tech_privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Route53DomainsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>]

---

##### `transfer_lock_input`<sup>Optional</sup> <a name="transfer_lock_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLockInput"></a>

```python
transfer_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_privacy`<sup>Required</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.adminPrivacy"></a>

```python
admin_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_privacy`<sup>Required</sup> <a name="billing_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.billingPrivacy"></a>

```python
billing_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `duration_in_years`<sup>Required</sup> <a name="duration_in_years" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.durationInYears"></a>

```python
duration_in_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registrant_privacy`<sup>Required</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.registrantPrivacy"></a>

```python
registrant_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tech_privacy`<sup>Required</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.techPrivacy"></a>

```python
tech_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transfer_lock`<sup>Required</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.transferLock"></a>

```python
transfer_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDomainAdminContact <a name="Route53DomainsDomainAdminContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContactExtraParam]] = None,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam">extra_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extra_param`<sup>Optional</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.extraParam"></a>

```python
extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainAdminContactExtraParam <a name="Route53DomainsDomainAdminContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainBillingContact <a name="Route53DomainsDomainBillingContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContactExtraParam]] = None,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam">extra_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extra_param`<sup>Optional</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.extraParam"></a>

```python
extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}.

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainBillingContactExtraParam <a name="Route53DomainsDomainBillingContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainConfig <a name="Route53DomainsDomainConfig" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  admin_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]] = None,
  admin_privacy: typing.Union[bool, IResolvable] = None,
  auto_renew: typing.Union[bool, IResolvable] = None,
  billing_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]] = None,
  billing_privacy: typing.Union[bool, IResolvable] = None,
  duration_in_years: typing.Union[int, float] = None,
  name_server: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]] = None,
  registrant_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]] = None,
  registrant_privacy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tech_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]] = None,
  tech_privacy: typing.Union[bool, IResolvable] = None,
  timeouts: Route53DomainsDomainTimeouts = None,
  transfer_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact">admin_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]</code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy">admin_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact">billing_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy">billing_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears">duration_in_years</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer">name_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact">registrant_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]</code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy">registrant_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact">tech_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]</code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy">tech_privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock">transfer_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}.

---

##### `admin_contact`<sup>Optional</sup> <a name="admin_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminContact"></a>

```python
admin_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}

---

##### `admin_privacy`<sup>Optional</sup> <a name="admin_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.adminPrivacy"></a>

```python
admin_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}.

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}.

---

##### `billing_contact`<sup>Optional</sup> <a name="billing_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingContact"></a>

```python
billing_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}.

---

##### `billing_privacy`<sup>Optional</sup> <a name="billing_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.billingPrivacy"></a>

```python
billing_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}.

---

##### `duration_in_years`<sup>Optional</sup> <a name="duration_in_years" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.durationInYears"></a>

```python
duration_in_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}.

---

##### `name_server`<sup>Optional</sup> <a name="name_server" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.nameServer"></a>

```python
name_server: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}.

---

##### `registrant_contact`<sup>Optional</sup> <a name="registrant_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantContact"></a>

```python
registrant_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}

---

##### `registrant_privacy`<sup>Optional</sup> <a name="registrant_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.registrantPrivacy"></a>

```python
registrant_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}.

---

##### `tech_contact`<sup>Optional</sup> <a name="tech_contact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techContact"></a>

```python
tech_contact: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]

tech_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}

---

##### `tech_privacy`<sup>Optional</sup> <a name="tech_privacy" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.techPrivacy"></a>

```python
tech_privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.timeouts"></a>

```python
timeouts: Route53DomainsDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}

---

##### `transfer_lock`<sup>Optional</sup> <a name="transfer_lock" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainConfig.property.transferLock"></a>

```python
transfer_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}.

---

### Route53DomainsDomainNameServer <a name="Route53DomainsDomainNameServer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainNameServer(
  glue_ips: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps">glue_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |

---

##### `glue_ips`<sup>Optional</sup> <a name="glue_ips" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.glueIps"></a>

```python
glue_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

### Route53DomainsDomainRegistrantContact <a name="Route53DomainsDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContactExtraParam]] = None,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam">extra_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extra_param`<sup>Optional</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.extraParam"></a>

```python
extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainRegistrantContactExtraParam <a name="Route53DomainsDomainRegistrantContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTechContact <a name="Route53DomainsDomainTechContact" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContact(
  address_line1: str = None,
  address_line2: str = None,
  city: str = None,
  contact_type: str = None,
  country_code: str = None,
  email: str = None,
  extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContactExtraParam]] = None,
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
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType">contact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam">extra_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]</code> | extra_param block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax">fax</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName">organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode">zip_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}. |

---

##### `address_line1`<sup>Optional</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}.

---

##### `contact_type`<sup>Optional</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}.

---

##### `extra_param`<sup>Optional</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.extraParam"></a>

```python
extra_param: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]

extra_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.fax"></a>

```python
fax: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}.

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}.

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}.

---

### Route53DomainsDomainTechContactExtraParam <a name="Route53DomainsDomainTechContactExtraParam" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContactExtraParam(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}.

---

### Route53DomainsDomainTimeouts <a name="Route53DomainsDomainTimeouts" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDomainAdminContactExtraParamList <a name="Route53DomainsDomainAdminContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainAdminContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]

---


### Route53DomainsDomainAdminContactExtraParamOutputReference <a name="Route53DomainsDomainAdminContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainAdminContactExtraParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]

---


### Route53DomainsDomainAdminContactList <a name="Route53DomainsDomainAdminContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainAdminContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]]

---


### Route53DomainsDomainAdminContactOutputReference <a name="Route53DomainsDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam">put_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam">reset_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extra_param` <a name="put_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam"></a>

```python
def put_extra_param(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContactExtraParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]

---

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_param` <a name="reset_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetExtraParam"></a>

```python
def reset_extra_param() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam">extra_param</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput">extra_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extra_param`<sup>Required</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParam"></a>

```python
extra_param: Route53DomainsDomainAdminContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParamList">Route53DomainsDomainAdminContactExtraParamList</a>

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_param_input`<sup>Optional</sup> <a name="extra_param_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.extraParamInput"></a>

```python
extra_param_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainAdminContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactExtraParam">Route53DomainsDomainAdminContactExtraParam</a>]]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainAdminContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainAdminContact">Route53DomainsDomainAdminContact</a>]

---


### Route53DomainsDomainBillingContactExtraParamList <a name="Route53DomainsDomainBillingContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainBillingContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]

---


### Route53DomainsDomainBillingContactExtraParamOutputReference <a name="Route53DomainsDomainBillingContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainBillingContactExtraParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]

---


### Route53DomainsDomainBillingContactList <a name="Route53DomainsDomainBillingContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainBillingContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]]

---


### Route53DomainsDomainBillingContactOutputReference <a name="Route53DomainsDomainBillingContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam">put_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam">reset_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extra_param` <a name="put_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam"></a>

```python
def put_extra_param(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContactExtraParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]

---

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_param` <a name="reset_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetExtraParam"></a>

```python
def reset_extra_param() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam">extra_param</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput">extra_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extra_param`<sup>Required</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParam"></a>

```python
extra_param: Route53DomainsDomainBillingContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParamList">Route53DomainsDomainBillingContactExtraParamList</a>

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_param_input`<sup>Optional</sup> <a name="extra_param_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.extraParamInput"></a>

```python
extra_param_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainBillingContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactExtraParam">Route53DomainsDomainBillingContactExtraParam</a>]]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainBillingContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainBillingContact">Route53DomainsDomainBillingContact</a>]

---


### Route53DomainsDomainNameServerList <a name="Route53DomainsDomainNameServerList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainNameServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainNameServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainNameServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]]

---


### Route53DomainsDomainNameServerOutputReference <a name="Route53DomainsDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainNameServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps">reset_glue_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glue_ips` <a name="reset_glue_ips" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetGlueIps"></a>

```python
def reset_glue_ips() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput">glue_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps">glue_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_ips_input`<sup>Optional</sup> <a name="glue_ips_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIpsInput"></a>

```python
glue_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `glue_ips`<sup>Required</sup> <a name="glue_ips" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.glueIps"></a>

```python
glue_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainNameServer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainNameServer">Route53DomainsDomainNameServer</a>]

---


### Route53DomainsDomainRegistrantContactExtraParamList <a name="Route53DomainsDomainRegistrantContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainRegistrantContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]

---


### Route53DomainsDomainRegistrantContactExtraParamOutputReference <a name="Route53DomainsDomainRegistrantContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainRegistrantContactExtraParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]

---


### Route53DomainsDomainRegistrantContactList <a name="Route53DomainsDomainRegistrantContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainRegistrantContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]]

---


### Route53DomainsDomainRegistrantContactOutputReference <a name="Route53DomainsDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam">put_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam">reset_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extra_param` <a name="put_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam"></a>

```python
def put_extra_param(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContactExtraParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]

---

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_param` <a name="reset_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetExtraParam"></a>

```python
def reset_extra_param() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam">extra_param</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput">extra_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extra_param`<sup>Required</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParam"></a>

```python
extra_param: Route53DomainsDomainRegistrantContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParamList">Route53DomainsDomainRegistrantContactExtraParamList</a>

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_param_input`<sup>Optional</sup> <a name="extra_param_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.extraParamInput"></a>

```python
extra_param_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainRegistrantContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactExtraParam">Route53DomainsDomainRegistrantContactExtraParam</a>]]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainRegistrantContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainRegistrantContact">Route53DomainsDomainRegistrantContact</a>]

---


### Route53DomainsDomainTechContactExtraParamList <a name="Route53DomainsDomainTechContactExtraParamList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainTechContactExtraParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]

---


### Route53DomainsDomainTechContactExtraParamOutputReference <a name="Route53DomainsDomainTechContactExtraParamOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainTechContactExtraParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]

---


### Route53DomainsDomainTechContactList <a name="Route53DomainsDomainTechContactList" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53DomainsDomainTechContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]]

---


### Route53DomainsDomainTechContactOutputReference <a name="Route53DomainsDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTechContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam">put_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1">reset_address_line1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType">reset_contact_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam">reset_extra_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extra_param` <a name="put_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam"></a>

```python
def put_extra_param(
  value: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContactExtraParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.putExtraParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]

---

##### `reset_address_line1` <a name="reset_address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine1"></a>

```python
def reset_address_line1() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_contact_type` <a name="reset_contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetContactType"></a>

```python
def reset_contact_type() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_extra_param` <a name="reset_extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetExtraParam"></a>

```python
def reset_extra_param() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.resetZipCode"></a>

```python
def reset_zip_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam">extra_param</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput">contact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput">extra_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType">contact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extra_param`<sup>Required</sup> <a name="extra_param" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParam"></a>

```python
extra_param: Route53DomainsDomainTechContactExtraParamList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParamList">Route53DomainsDomainTechContactExtraParamList</a>

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `contact_type_input`<sup>Optional</sup> <a name="contact_type_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactTypeInput"></a>

```python
contact_type_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `extra_param_input`<sup>Optional</sup> <a name="extra_param_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.extraParamInput"></a>

```python
extra_param_input: typing.Union[IResolvable, typing.List[Route53DomainsDomainTechContactExtraParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactExtraParam">Route53DomainsDomainTechContactExtraParam</a>]]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `contact_type`<sup>Required</sup> <a name="contact_type" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.contactType"></a>

```python
contact_type: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainTechContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTechContact">Route53DomainsDomainTechContact</a>]

---


### Route53DomainsDomainTimeoutsOutputReference <a name="Route53DomainsDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_domains_domain

route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53DomainsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53DomainsDomain.Route53DomainsDomainTimeouts">Route53DomainsDomainTimeouts</a>]

---



