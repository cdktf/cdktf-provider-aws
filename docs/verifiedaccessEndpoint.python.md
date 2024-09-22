# `verifiedaccessEndpoint` Submodule <a name="`verifiedaccessEndpoint` Submodule" id="@cdktf/provider-aws.verifiedaccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessEndpoint <a name="VerifiedaccessEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_domain: str,
  attachment_type: str,
  domain_certificate_arn: str,
  endpoint_domain_prefix: str,
  endpoint_type: str,
  verified_access_group_id: str,
  description: str = None,
  id: str = None,
  load_balancer_options: VerifiedaccessEndpointLoadBalancerOptions = None,
  network_interface_options: VerifiedaccessEndpointNetworkInterfaceOptions = None,
  policy_document: str = None,
  security_group_ids: typing.List[str] = None,
  sse_specification: VerifiedaccessEndpointSseSpecification = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VerifiedaccessEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.applicationDomain">application_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | load_balancer_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | network_interface_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | sse_specification block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_domain`<sup>Required</sup> <a name="application_domain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.applicationDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}.

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.attachmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}.

---

##### `domain_certificate_arn`<sup>Required</sup> <a name="domain_certificate_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.domainCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}.

---

##### `endpoint_domain_prefix`<sup>Required</sup> <a name="endpoint_domain_prefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.endpointDomainPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}.

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.verifiedAccessGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_options`<sup>Optional</sup> <a name="load_balancer_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.loadBalancerOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

load_balancer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}

---

##### `network_interface_options`<sup>Optional</sup> <a name="network_interface_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.networkInterfaceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

network_interface_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.policyDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}.

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

sse_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions">put_load_balancer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions">put_network_interface_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification">put_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions">reset_load_balancer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions">reset_network_interface_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification">reset_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_load_balancer_options` <a name="put_load_balancer_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions"></a>

```python
def put_load_balancer_options(
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.loadBalancerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

##### `put_network_interface_options` <a name="put_network_interface_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions"></a>

```python
def put_network_interface_options(
  network_interface_id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
) -> None
```

###### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `put_sse_specification` <a name="put_sse_specification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification"></a>

```python
def put_sse_specification(
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None
) -> None
```

###### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification.parameter.customerManagedKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer_options` <a name="reset_load_balancer_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions"></a>

```python
def reset_load_balancer_options() -> None
```

##### `reset_network_interface_options` <a name="reset_network_interface_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions"></a>

```python
def reset_network_interface_options() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_sse_specification` <a name="reset_sse_specification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification"></a>

```python
def reset_sse_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedaccessEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedaccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain">device_validation_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain">endpoint_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId">verified_access_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput">application_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput">domain_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput">endpoint_domain_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput">load_balancer_options_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput">network_interface_options_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput">sse_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput">verified_access_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain">application_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_validation_domain`<sup>Required</sup> <a name="device_validation_domain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain"></a>

```python
device_validation_domain: str
```

- *Type:* str

---

##### `endpoint_domain`<sup>Required</sup> <a name="endpoint_domain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain"></a>

```python
endpoint_domain: str
```

- *Type:* str

---

##### `load_balancer_options`<sup>Required</sup> <a name="load_balancer_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions"></a>

```python
load_balancer_options: VerifiedaccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `network_interface_options`<sup>Required</sup> <a name="network_interface_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions"></a>

```python
network_interface_options: VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification"></a>

```python
sse_specification: VerifiedaccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts"></a>

```python
timeouts: VerifiedaccessEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a>

---

##### `verified_access_instance_id`<sup>Required</sup> <a name="verified_access_instance_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId"></a>

```python
verified_access_instance_id: str
```

- *Type:* str

---

##### `application_domain_input`<sup>Optional</sup> <a name="application_domain_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput"></a>

```python
application_domain_input: str
```

- *Type:* str

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_certificate_arn_input`<sup>Optional</sup> <a name="domain_certificate_arn_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput"></a>

```python
domain_certificate_arn_input: str
```

- *Type:* str

---

##### `endpoint_domain_prefix_input`<sup>Optional</sup> <a name="endpoint_domain_prefix_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput"></a>

```python
endpoint_domain_prefix_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_options_input`<sup>Optional</sup> <a name="load_balancer_options_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput"></a>

```python
load_balancer_options_input: VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---

##### `network_interface_options_input`<sup>Optional</sup> <a name="network_interface_options_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput"></a>

```python
network_interface_options_input: VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sse_specification_input`<sup>Optional</sup> <a name="sse_specification_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput"></a>

```python
sse_specification_input: VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VerifiedaccessEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>]

---

##### `verified_access_group_id_input`<sup>Optional</sup> <a name="verified_access_group_id_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```python
verified_access_group_id_input: str
```

- *Type:* str

---

##### `application_domain`<sup>Required</sup> <a name="application_domain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain"></a>

```python
application_domain: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_certificate_arn`<sup>Required</sup> <a name="domain_certificate_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn"></a>

```python
domain_certificate_arn: str
```

- *Type:* str

---

##### `endpoint_domain_prefix`<sup>Required</sup> <a name="endpoint_domain_prefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix"></a>

```python
endpoint_domain_prefix: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId"></a>

```python
verified_access_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessEndpointConfig <a name="VerifiedaccessEndpointConfig" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_domain: str,
  attachment_type: str,
  domain_certificate_arn: str,
  endpoint_domain_prefix: str,
  endpoint_type: str,
  verified_access_group_id: str,
  description: str = None,
  id: str = None,
  load_balancer_options: VerifiedaccessEndpointLoadBalancerOptions = None,
  network_interface_options: VerifiedaccessEndpointNetworkInterfaceOptions = None,
  policy_document: str = None,
  security_group_ids: typing.List[str] = None,
  sse_specification: VerifiedaccessEndpointSseSpecification = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VerifiedaccessEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain">application_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | load_balancer_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | network_interface_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | sse_specification block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_domain`<sup>Required</sup> <a name="application_domain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain"></a>

```python
application_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}.

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}.

---

##### `domain_certificate_arn`<sup>Required</sup> <a name="domain_certificate_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn"></a>

```python
domain_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}.

---

##### `endpoint_domain_prefix`<sup>Required</sup> <a name="endpoint_domain_prefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix"></a>

```python
endpoint_domain_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}.

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId"></a>

```python
verified_access_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_options`<sup>Optional</sup> <a name="load_balancer_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions"></a>

```python
load_balancer_options: VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

load_balancer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}

---

##### `network_interface_options`<sup>Optional</sup> <a name="network_interface_options" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions"></a>

```python
network_interface_options: VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

network_interface_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}.

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification"></a>

```python
sse_specification: VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

sse_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts"></a>

```python
timeouts: VerifiedaccessEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}

---

### VerifiedaccessEndpointLoadBalancerOptions <a name="VerifiedaccessEndpointLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions(
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointNetworkInterfaceOptions <a name="VerifiedaccessEndpointNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions(
  network_interface_id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

### VerifiedaccessEndpointSseSpecification <a name="VerifiedaccessEndpointSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification(
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}. |

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}.

---

### VerifiedaccessEndpointTimeouts <a name="VerifiedaccessEndpointTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessEndpointLoadBalancerOptionsOutputReference <a name="VerifiedaccessEndpointLoadBalancerOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">reset_load_balancer_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_arn` <a name="reset_load_balancer_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```python
def reset_load_balancer_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">load_balancer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer_arn_input`<sup>Optional</sup> <a name="load_balancer_arn_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```python
load_balancer_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---


### VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference <a name="VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---


### VerifiedaccessEndpointSseSpecificationOutputReference <a name="VerifiedaccessEndpointSseSpecificationOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">reset_customer_managed_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_managed_key_enabled` <a name="reset_customer_managed_key_enabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```python
def reset_customer_managed_key_enabled() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customer_managed_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_key_enabled_input`<sup>Optional</sup> <a name="customer_managed_key_enabled_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```python
customer_managed_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---


### VerifiedaccessEndpointTimeoutsOutputReference <a name="VerifiedaccessEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_endpoint

verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VerifiedaccessEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>]

---



